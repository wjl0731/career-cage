import { defineStore } from 'pinia'
import { buildSequence, computeResult } from '../logic/engine'
import data from '../data/questions.json'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    stage: 'start', // 'start' | 'quiz' | 'result'
    sequence: [data.fixedQuestions[0]], // 作答序列，初始只含 Q1
    currentIndex: 0,
    answers: {}, // { [questionId]: value }
    questionPath: [], // 记录跳转路径，便于调试 / 复盘
    industry: null,
    result: null,
    direction: 'forward' // 控制切换动画方向
  }),

  getters: {
    currentQuestion: (state) => state.sequence[state.currentIndex] || null,
    totalQuestions: () => data.config.totalQuestions,
    answeredCount: (state) => Object.keys(state.answers).length,
    progress: (state) =>
      Math.min(100, Math.round((state.currentIndex / data.config.totalQuestions) * 100)),
    isLastQuestion: (state) => state.currentIndex >= state.sequence.length - 1,
    scaleLabels: () => data.scaleLabels,
    meta: () => data.meta
  },

  actions: {
    startQuiz() {
      this.stage = 'quiz'
      this.sequence = [data.fixedQuestions[0]]
      this.currentIndex = 0
      this.answers = {}
      this.questionPath = ['q1']
      this.industry = null
      this.result = null
      this.direction = 'forward'
    },

    /** 处理 branch 题（Q1）：记录行业并构建完整动态序列 */
    answerBranch(question, option) {
      this.answers[question.id] = option.value
      this.industry = option.value
      this.questionPath.push(`branch:${option.value} -> ${option.next}`)
      // 行业确定，构建后续 18 题
      this.sequence = buildSequence(option.value)
      this.questionPath.push(...this.sequence.slice(1).map((q) => q.id))
      this.next()
    },

    /** 处理 scale 题：记录 1-7 分值 */
    answerScale(question, value) {
      this.answers[question.id] = value
      this.next()
    },

    next() {
      this.direction = 'forward'
      if (this.currentIndex < this.sequence.length - 1) {
        this.currentIndex++
      } else {
        this.finish()
      }
    },

    prev() {
      if (this.currentIndex === 0) return
      this.direction = 'back'
      this.currentIndex--
    },

    finish() {
      this.result = computeResult(this.sequence, this.answers)
      this.stage = 'result'
    },

    restart() {
      this.stage = 'start'
      this.sequence = [data.fixedQuestions[0]]
      this.currentIndex = 0
      this.answers = {}
      this.questionPath = []
      this.industry = null
      this.result = null
      this.direction = 'forward'
    }
  }
})
