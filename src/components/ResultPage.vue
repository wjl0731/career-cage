<script setup>
import { computed, onMounted } from 'vue'
import { useQuizStore } from '../stores/quiz'
import { DIMENSIONS } from '../logic/engine'
import PersonaCharacter from './PersonaCharacter.vue'
import { RotateCcw, CalendarClock, Quote } from 'lucide-vue-next'

const store = useQuizStore()
const result = computed(() => store.result)

onMounted(() => window.scrollTo(0, 0))

const barColors = {
  money: 'bg-emerald-400',
  drain: 'bg-agree',
  fortress: 'bg-sky-400',
  urge: 'bg-accent'
}

const bars = computed(() =>
  DIMENSIONS.map((dim) => ({
    key: dim,
    label: result.value.dimensionMeta[dim].label,
    desc: result.value.dimensionMeta[dim].desc,
    value: result.value.dimensions[dim],
    color: barColors[dim]
  }))
)
</script>

<template>
  <div v-if="result" class="w-full max-w-md mx-auto px-6 py-10">
    <!-- 称号 -->
    <div class="text-center mb-8">
      <p class="text-sm text-gray-400 mb-1">经审讯，你的狱友身份认定为</p>
      <div class="w-48 h-48 mx-auto">
        <PersonaCharacter :id="result.title.id" class="w-full h-full" />
      </div>
      <h1 class="text-3xl font-extrabold text-ink mb-3">{{ result.title.name }}</h1>
      <p class="text-gray-500 text-sm leading-relaxed">{{ result.title.desc }}</p>
    </div>

    <!-- 建议离职日期 -->
    <div class="rounded-2xl bg-white border-2 border-accent/20 p-5 mb-6">
      <div class="flex items-center gap-2 text-accent mb-2">
        <CalendarClock :size="18" />
        <span class="text-sm font-semibold">建议离职日期</span>
      </div>
      <p class="text-2xl font-bold text-ink mb-1">{{ result.leaveDate.text }}</p>
      <p class="text-sm text-gray-500">{{ result.leaveDate.detail }}</p>
    </div>

    <!-- 四维条形图 -->
    <div class="rounded-2xl bg-white border border-gray-100 p-5 mb-6 space-y-4">
      <div class="flex items-baseline justify-between">
        <span class="text-sm font-semibold text-ink">四维扫描报告</span>
        <span class="text-xs text-gray-400">该跑路指数 {{ result.escapeIndex }}</span>
      </div>
      <div v-for="bar in bars" :key="bar.key">
        <div class="flex justify-between text-sm mb-1">
          <span class="font-medium text-ink">{{ bar.label }}</span>
          <span class="text-gray-400 tabular-nums">{{ bar.value }}</span>
        </div>
        <div class="h-2.5 rounded-full bg-gray-100 overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-700 ease-out"
            :class="bar.color"
            :style="{ width: bar.value + '%' }"
          />
        </div>
        <p class="text-xs text-gray-400 mt-1">{{ bar.desc }}</p>
      </div>
    </div>

    <!-- 黑化金句 -->
    <div class="rounded-2xl bg-ink text-gray-100 p-5 mb-8">
      <div class="flex items-center gap-2 text-gray-400 mb-2">
        <Quote :size="16" />
        <span class="text-xs font-semibold tracking-wide">今日黑化金句</span>
      </div>
      <p class="text-base leading-relaxed">{{ result.quote }}</p>
    </div>

    <button
      type="button"
      class="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full
             bg-accent text-white font-semibold shadow-lg shadow-accent/30
             transition-all duration-200 hover:bg-accent/90 active:scale-95"
      @click="store.restart()"
    >
      <RotateCcw :size="18" />
      再测一次
    </button>

    <p class="text-center text-xs text-gray-400 mt-4">
      行业不同，题目不同 · 换个心情再来一遍
    </p>
  </div>
</template>
