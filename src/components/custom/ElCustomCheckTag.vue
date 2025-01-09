<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from 'vue';
import { ElTag } from 'element-plus';

// 定义组件的 props，扩展 ElTag 的所有 props
// eslint-disable-next-line vue/define-props-declaration
const props = defineProps({
  // 添加自定义的 color 初始值 prop
  changeType: {
    type: String,
    default: 'info'
  },
  // 其他 ElTag 的 props
  ...ElTag.props
});

const currentType = ref(props.type);

// 定义组件的 emits
const emit = defineEmits<{
  (event: 'type-change', color: string): void;
}>();

// 切换颜色的方法
const toggleType = () => {
  if (currentType.value === props.changeType) {
    currentType.value = props.type;
  } else {
    currentType.value = props.changeType;
  }
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('type-change', currentType.value);
};

// 将 props 中的 color 属性替换为 currentColor
const tagProps = computed(() => ({
  ...props,
  type: currentType.value
}));

defineExpose({ toggleType });
</script>

<template>
  <ElTag v-bind="tagProps" @click="toggleType">
    <slot></slot>
  </ElTag>
</template>

<style scoped>
/* 在这里可以添加一些样式，例如鼠标悬停效果等 */
</style>
