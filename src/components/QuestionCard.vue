<script setup>
import { computed } from 'vue'
import { useQuizStore } from '../stores/quiz'
import ScaleSelector from './ScaleSelector.vue'
import { ChevronLeft } from 'lucide-vue-next'

const store = useQuizStore()

const question = computed(() => store.currentQuestion)
const questionNo = computed(() => store.currentIndex + 1)

function onBranch(option) {
  store.answerBranch(question.value, option)
}
function onScale(value) {
  // 给一点点延迟，让选中态被看到再切题
  setTimeout(() => store.answerScale(question.value, value), 220)
}
</script>

<template>
  <div v-if="question" class="w-full max-w-md mx-auto px-6">
    <div class="flex items-center gap-3 mb-6">
      <button
        v-if="store.currentIndex > 0"
        type="button"
        class="text-gray-400 hover:text-ink transition-colors"
        @click="store.prev()"
      >
        <ChevronLeft :size="22" />
      </button>
      <span class="text-sm font-medium text-accent tracking-wide">
        第 {{ questionNo }} / {{ store.totalQuestions }} 题
      </span>
    </div>

    <h2 class="text-xl sm:text-2xl font-bold text-ink leading-relaxed mb-10">
      {{ question.text }}
    </h2>

    <!-- branch 题：行业选择 -->
    <div v-if="question.type === 'branch'" class="space-y-3">
      <button
        v-for="opt in question.options"
        :key="opt.value"
        type="button"
        class="w-full text-left px-5 py-4 rounded-2xl border-2 border-gray-200 bg-white
               text-ink font-medium transition-all duration-200
               hover:border-accent hover:bg-accent/5 active:scale-[0.98]"
        @click="onBranch(opt)"
      >
        {{ opt.text }}
      </button>
    </div>

    <!-- scale 题：7 圆圈打分 -->
    <div v-else class="pt-2">
      <ScaleSelector
        :model-value="store.answers[question.id] || null"
        :left-label="(question.labels && question.labels.left) || store.scaleLabels.left"
        :right-label="(question.labels && question.labels.right) || store.scaleLabels.right"
        @select="onScale"
      />
    </div>
  </div>
</template>
