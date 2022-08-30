<template>
  <HrefWrapper :href="props.href"
               @mouseenter="mouseEnter"
               @mousemove="mouseMove"
               @mouseleave="mouseLeave">

    <slot/>

    <div v-if="props.toolTipData && toolTipIsShow" class="tooltip" ref="toolTip">
      <div class="tooltip">
        <slot name="tooltip" :data="props.toolTipData"/>
      </div>
    </div>
  </HrefWrapper>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

import HrefWrapper from './HrefWrapper.vue';


interface Props {
  href?: string,
  toolTipData?: unknown,
}

const props = defineProps<Props>();

const toolTip = ref<HTMLDivElement | null>(null);
const toolTipIsShow = ref(false);
const toolTipIsCanShow = ref(false);
const toolTipPosition = ref<Point>({X: 0, Y: 0});

const setTipPosition = (mousePosition: Point) => {
  if (!toolTip.value) return;

  const windowSize: Point = {
    X: document.body.clientWidth,
    Y: document.body.clientHeight,
  };

  const toolTipSize: Point = {
    X: toolTip.value.firstChild.clientWidth,
    Y: toolTip.value.firstChild.clientHeight,
  };

  const shift : Point = {X: 20, Y: 0};
  const shiftReverse : Point = {X: 10, Y: 0};
  const currentPosition : Point = mousePosition;

  currentPosition.X += shift.X;
  currentPosition.Y += shift.Y;

  if (currentPosition.X + toolTipSize.X > windowSize.X) {
    currentPosition.X -= shift.X + toolTipSize.X + shiftReverse.X;
  }
  if (currentPosition.Y + toolTipSize.Y > windowSize.Y) {
    currentPosition.Y -= shift.Y + toolTipSize.Y + shiftReverse.Y;
  }

  toolTipPosition.value = currentPosition;
};


watch(toolTipIsShow, (value) => {
  if (value) {
    if (!toolTipIsCanShow.value) {
      toolTipIsShow.value = false;
      toolTipIsCanShow.value = true;
      setTimeout(() => {
        if (toolTipIsCanShow.value) toolTipIsShow.value = true;
      }, 2000);
    }
  }
});

watch(toolTipPosition, (value) => {
  toolTip.value.style.setProperty('--tool-tip-position-x', value.X.toString());
  toolTip.value.style.setProperty('--tool-tip-position-y', value.Y.toString());
});

const mouseEnter = () => {
  if (props.toolTipData) toolTipIsShow.value = true;
};
const mouseLeave = () => {
  toolTipIsShow.value = false;
  toolTipIsCanShow.value = false;
};

const mouseMove = (event: MouseEvent) => {
  if (props.toolTipData == null) return;
  if (!toolTipIsShow.value) return;
  setTipPosition({X: event.pageX, Y: event.pageY} as Point);
};


</script>

<style lang="scss">
.tooltip{
  position: fixed;

  --tool-tip-position-x: 0px;
  --tool-tip-position-y: 0px;

  left: calc(var(--tool-tip-position-x) * 1px);
  top: calc(var(--tool-tip-position-y) * 1px);

  z-index: 100;
}
</style>
