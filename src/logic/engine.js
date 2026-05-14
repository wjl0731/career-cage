import data from '../data/questions.json'

/**
 * 动态路由题库引擎
 * ---------------------------------------------------------------
 * 题库逻辑池 (~54 题)：
 *   - fixedQuestions:  Q1(branch) + Q2(scale) 固定前置
 *   - industryPools:   tech / finance / creative，各 15 题
 *   - universalPool:   全行业共性"黑化"池，9 题
 *   - easterEggPool:   杭州 / 短剧 彩蛋题，3 题
 *
 * 用户最终作答 20 题：
 *   Q1 (行业分支) + Q2 (薪资) + 13 行业题 + 4 共性题 + 1 彩蛋题
 * ---------------------------------------------------------------
 */

const DIMENSIONS = ['money', 'drain', 'fortress', 'urge']

const DIMENSION_META = {
  money: { label: '钱到位度', desc: '工资覆盖体面生活的程度' },
  drain: { label: '精神内耗', desc: '黑化程度，越高越累' },
  fortress: { label: '职业堡垒', desc: '技能护城河是否在流失' },
  urge: { label: '离职冲动', desc: '随时想跑路的指数' }
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function sample(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length))
}

/**
 * 根据 Q1 选择的行业 value，构建完整的 20 题作答序列。
 * 返回的数组第 0 项是 q1，第 1 项是 q2，其后为动态抽取的题目。
 */
export function buildSequence(industryValue) {
  const { fixedQuestions, industryPools, universalPool, easterEggPool, config } = data

  const pool = industryPools[industryValue]
  if (!pool) {
    throw new Error(`未知行业分支: ${industryValue}`)
  }

  const industryQs = sample(pool, config.industryDraw)
  const universalQs = sample(universalPool, config.universalDraw)
  const eggQs = sample(easterEggPool, config.easterEggDraw)

  // 共性题 + 彩蛋题混排，构成"全行业黑化池"尾段 (Q16-Q20)
  const tail = shuffle([...universalQs, ...eggQs])

  return [fixedQuestions[0], fixedQuestions[1], ...industryQs, ...tail]
}

/**
 * 单题对各维度的得分贡献。
 * value: 1-7，1 = 最左("扎心了老铁"/非常同意)，7 = 最右("别骂了求你"/非常不同意)
 * agreement ∈ [0,1]，1 表示完全同意。
 *
 * effects 权重符号约定：
 *   正权重 -> 同意抬高该维度  贡献 = agreement * |w|
 *   负权重 -> 同意拉低该维度  贡献 = (1 - agreement) * |w|
 */
function accumulate(totals, question, value) {
  const effects = question.effects
  if (!effects) return
  const agreement = (7 - value) / 6
  for (const dim of Object.keys(effects)) {
    const w = effects[dim]
    const weight = Math.abs(w)
    const contribution = w >= 0 ? agreement * weight : (1 - agreement) * weight
    totals[dim].score += contribution
    totals[dim].max += weight
  }
}

/**
 * 根据作答序列与答案表，计算四维分数 (0-100) 及最终结果。
 * answers: { [questionId]: value(1-7) }
 */
export function computeResult(sequence, answers) {
  const totals = {}
  for (const dim of DIMENSIONS) totals[dim] = { score: 0, max: 0 }

  for (const q of sequence) {
    if (q.type !== 'scale') continue
    const value = answers[q.id]
    if (value == null) continue
    accumulate(totals, q, value)
  }

  const dimensions = {}
  for (const dim of DIMENSIONS) {
    const { score, max } = totals[dim]
    dimensions[dim] = max > 0 ? Math.round((score / max) * 100) : 50
  }

  const { money, drain, fortress, urge } = dimensions

  // 综合"该跑路"指数：离职冲动主导，叠加内耗、缺钱、堡垒流失
  const escapeIndex = Math.round(
    urge * 0.45 + drain * 0.3 + (100 - money) * 0.12 + (100 - fortress) * 0.13
  )

  return {
    dimensions,
    dimensionMeta: DIMENSION_META,
    escapeIndex,
    title: pickTitle(dimensions, escapeIndex),
    leaveDate: pickLeaveDate(escapeIndex),
    quote: pickQuote()
  }
}

function pickTitle({ money, drain, fortress, urge }, escapeIndex) {
  if (urge >= 75 && drain >= 70) {
    return {
      id: 'bomb',
      name: '随时引爆的工位炸弹',
      emoji: '💣',
      desc: '引信烧到底了，你还在准时打卡——这份镇定，连狱警看了都后退三步。'
    }
  }
  if (drain >= 75 && fortress <= 35) {
    return {
      id: 'harddisk',
      name: '正在格式化的硬盘',
      emoji: '💽',
      desc: '内耗拉满、技能清零，进度条卡在 99%，再不备份就真的没了。'
    }
  }
  if (fortress <= 30 && money <= 45) {
    return {
      id: 'fossil',
      name: '资深职场活化石',
      emoji: '🦴',
      desc: '在同一个工位服役太久，你已经和椅子长在了一起，还长出了年轮。'
    }
  }
  if (money >= 70 && urge <= 40) {
    return {
      id: 'monk',
      name: '深谙摸鱼之道的扫地僧',
      emoji: '🧹',
      desc: '钱给到位，心如止水，全监狱最自在的就是你，连放风都嫌耽误摸鱼。'
    }
  }
  if (urge <= 35 && drain <= 40) {
    return {
      id: 'zen',
      name: '已开悟的职场佛系隐士',
      emoji: '🧘',
      desc: '心中毫无波澜，甚至想给老板和狱警，各倒上一杯热茶。'
    }
  }
  if (escapeIndex >= 65) {
    return {
      id: 'parachute',
      name: '挂在墙头的越狱预备役',
      emoji: '🪂',
      desc: '绳子、梯子、降落伞都备齐了，只差一个敢往下跳的瞬间。'
    }
  }
  return {
    id: 'pingpong',
    name: '在牢笼里反复横跳的人',
    emoji: '🎭',
    desc: '一边喊着要越狱，一边准时回来吃牢饭，主打一个拧巴。'
  }
}

function pickLeaveDate(escapeIndex) {
  if (escapeIndex >= 82) {
    return { text: '建议昨天就走', detail: '你已经超时服役，每多待一天都是慈善。' }
  }
  if (escapeIndex >= 66) {
    return { text: '30 天后', detail: '走完流程、交接干净，体面地离开。' }
  }
  if (escapeIndex >= 50) {
    return { text: '90 天后', detail: '攒够下一份底气和年终奖，再优雅转身。' }
  }
  if (escapeIndex >= 34) {
    return { text: '再骑驴找马半年', detail: '没到忍无可忍，先把简历和技能喂饱。' }
  }
  return { text: '建议永不离职', detail: '这里就是你的舒适区，珍惜这份难得的安稳。' }
}

function pickQuote() {
  const quotes = data.darkQuotes
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export { DIMENSIONS, DIMENSION_META }
