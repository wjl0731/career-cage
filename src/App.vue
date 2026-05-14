<script setup>
import { computed } from 'vue'
import { useQuizStore } from './stores/quiz'
import ProgressBar from './components/ProgressBar.vue'
import StartPage from './components/StartPage.vue'
import QuestionCard from './components/QuestionCard.vue'
import ResultPage from './components/ResultPage.vue'

const store = useQuizStore()
const transitionName = computed(() =>
  store.direction === 'back' ? 'slide-back' : 'slide'
)
</script>

<template>
  <div class="min-h-full bg-canvas flex flex-col">
    <ProgressBar v-if="store.stage === 'quiz'" :progress="store.progress" />

    <!-- 开始页 -->
    <main
      v-if="store.stage === 'start'"
      class="flex-1 flex items-center justify-center py-12"
    >
      <StartPage />
    </main>

    <!-- 答题页：题目切换动画 -->
    <main
      v-else-if="store.stage === 'quiz'"
      class="flex-1 flex items-center justify-center py-12 relative overflow-hidden"
    >
      <Transition :name="transitionName" mode="out-in">
        <QuestionCard :key="store.currentIndex" />
      </Transition>
    </main>

    <!-- 结果页 -->
    <main v-else class="flex-1 flex items-start justify-center">
      <ResultPage />
    </main>
  </div>
</template>

<style>
/* 回退方向：右滑入、左淡出 */
.slide-back-enter-active {
  transition: all 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-back-leave-active {
  transition: all 0.22s ease-in;
  position: absolute;
  width: 100%;
}
.slide-back-enter-from {
  opacity: 0;
  transform: translateX(-36px);
}
.slide-back-leave-to {
  opacity: 0;
  transform: translateX(24px);
}
</style>
