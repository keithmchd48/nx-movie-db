<template>
  <div
    :class="[isVisible ? 'block' : 'hidden']"
    class="xs:text-xs m:text-sm lg:text-sm xs:max-w-28 l:max-w-full text-white flex items-center border-[1px] border-white bg-brand-black py-1 px-1"
  >
    <Icon name="ph:magnifying-glass-bold" class="cursor-pointer" />
    <input
      ref="inputRef"
      :placeholder="placeholder"
      type="text"
      :value="value"
      @input="onChange"
      class="pl-1 bg-inherit font-thin overflow-hidden text-white focus:outline-none"
    />
    <div @click="onClear" :class="[value ? 'block' : 'hidden']" class="cursor-pointer">
      <Icon name="humbleicons:times" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string;
  value: string;
  isVisible: boolean;
}
const props = defineProps<Props>();

const inputRef: Ref<HTMLInputElement | null> = ref(null);

watch(
  () => props.isVisible,
  (first, second) => {
    nextTick(() => {
      inputRef?.value?.focus();
    });
  }
);

const emit = defineEmits(["change", "clear"]);
const onChange = (e: Event): void => {
  emit("change", e);
};
const onClear = (): void => {
  emit("clear");
};
</script>

<style scoped>
.icon {
  display: inherit;
}
</style>
