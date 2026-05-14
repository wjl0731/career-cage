<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: null },
  leftLabel: { type: String, default: '扎心了老铁' },
  rightLabel: { type: String, default: '别骂了求你' }
})
const emit = defineEmits(['update:modelValue', 'select'])

// 7 个圆圈：两端最大，向中间递减
const circles = [
  { value: 1, size: 56, side: 'agree' },
  { value: 2, size: 46, side: 'agree' },
  { value: 3, size: 38, side: 'agree' },
  { value: 4, size: 30, side: 'neutral' },
  { value: 5, size: 38, side: 'disagree' },
  { value: 6, size: 46, side: 'disagree' },
  { value: 7, size: 56, side: 'disagree' }
]

const selected = computed(() => props.modelValue)

function pick(value) {
  emit('update:modelValue', value)
  emit('select', value)
}

function ringClass(c) {
  if (c.side === 'agree') return 'border-agree'
  if (c.side === 'disagree') return 'border-disagree'
  return 'border-gray-300'
}
function fillClass(c) {
  if (c.side === 'agree') return 'bg-agree border-agree'
  if (c.side === 'disagree') return 'bg-disagree border-disagree'
  return 'bg-gray-400 border-gray-400'
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between gap-1 sm:gap-3 px-1">
      <button
        v-for="c in circles"
        :key="c.value"
        type="button"
        class="rounded-full border-2 transition-all duration-200 shrink-0 active:scale-90 focus:outline-none"
        :class="selected === c.value ? fillClass(c) : ringClass(c) + ' bg-white hover:bg-gray-50'"
        :style="{ width: c.size + 'px', height: c.size + 'px' }"
        :aria-label="`第 ${c.value} 档`"
        @click="pick(c.value)"
      />
    </div>
    <div class="flex justify-between mt-3 px-1 text-xs sm:text-sm">
      <span class="text-agree font-medium">{{ leftLabel }}</span>
      <span class="text-disagree font-medium">{{ rightLabel }}</span>
    </div>
  </div>
</template>
