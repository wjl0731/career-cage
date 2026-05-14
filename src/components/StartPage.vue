<script setup>
import { useQuizStore } from '../stores/quiz'
import PersonaCharacter from './PersonaCharacter.vue'
import { Fingerprint, ArrowRight } from 'lucide-vue-next'

const store = useQuizStore()

const dossier = [
  { k: '罪名', v: '明知是牢笼，仍自愿续签' },
  { k: '服役方式', v: '带薪 · 自助打卡' },
  { k: '放风时间', v: '周末两天（如无加班）' },
  { k: '刑期', v: '待本次自检后宣判' }
]
</script>

<template>
  <div class="relative w-full max-w-md mx-auto px-6 text-center overflow-hidden">
    <!-- 背景：淡淡的铁栏杆 -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-44 opacity-[0.06]"
      style="
        background-image: repeating-linear-gradient(
          to right,
          #2d2d2d 0,
          #2d2d2d 6px,
          transparent 6px,
          transparent 34px
        );
      "
    />

    <div class="relative">
      <div
        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-medium mb-5"
      >
        <Fingerprint :size="13" />
        带薪服役 · 自助查询站
      </div>

      <h1 class="text-3xl sm:text-4xl font-extrabold text-ink mb-3 leading-tight">
        {{ store.meta.title }}
      </h1>
      <p class="text-gray-500 text-sm mb-1">
        别问，问就是「再干两年就走」
      </p>
      <p class="text-xs text-gray-400 mb-6">
        20 道扎心审讯 · 当场宣判你的「剩余服役时间」
      </p>

      <!-- 吉祥物：举囚号牌的新人狱友 -->
      <div class="w-52 h-52 mx-auto -mb-2">
        <PersonaCharacter id="rookie" class="w-full h-full" />
      </div>

      <!-- 入册登记卡 -->
      <div
        class="text-left rounded-2xl bg-white border border-gray-100 shadow-sm p-5 mb-7"
      >
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-bold text-ink">入册登记表</span>
          <span class="text-[10px] text-gray-400 font-mono">NO. ?????</span>
        </div>
        <div
          v-for="row in dossier"
          :key="row.k"
          class="flex justify-between py-1.5 text-sm border-b border-dashed border-gray-100 last:border-0"
        >
          <span class="text-gray-400 shrink-0 mr-4">{{ row.k }}</span>
          <span class="text-ink font-medium text-right">{{ row.v }}</span>
        </div>
      </div>

      <button
        type="button"
        class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white
               font-semibold text-lg shadow-lg shadow-accent/30
               transition-all duration-200 hover:bg-accent/90 active:scale-95"
        @click="store.startQuiz()"
      >
        领取我的刑期
        <ArrowRight :size="20" />
      </button>

      <p class="mt-6 mb-2 text-xs text-gray-400 leading-relaxed">
        本测试不具法律效力，但可能比判决书更扎心。<br />
        狱友请在情绪稳定时作答，越狱有风险，吐槽需谨慎。
      </p>
    </div>
  </div>
</template>
