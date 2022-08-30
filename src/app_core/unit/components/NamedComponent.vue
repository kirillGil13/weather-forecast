<template>
  <label :class="getClasses">
    <LabelStyled class="named-field__text-hint"
                 :text="props.text"
                 :fontFamily="props.fontFamily"
                 :fontSize="props.fontSize"
                 :fontWeight="props.fontWeight"
                 :fontLineHeight="props.fontLineHeight"
                 :color="props.color"
                 :location="props.position_text"/>
    <slot/>
  </label>
</template>


<script lang="ts">
export const validators = {
  location: ['left', 'center', 'right'],
};

export default {};
</script>


<script setup lang="ts">
import {computed} from 'vue';

import LabelStyled from '@/app_core/unit/components_styled/LabelStyled.vue';


interface Props {
  text: string,
  fontFamily?: string,
  fontSize?: number,
  fontWeight?: number,
  fontLineHeight?: number,
  color?: string,
  location?: typeof validators.location[number],
}

const props = withDefaults(defineProps<Props>(), {
  location: validators.location[0],
});


const getClasses = computed(() => {
  return [
    `named-field`,
  ];
});

</script>


<style lang="scss">
@import "../../../assets/styles/base";

.named-field {
  position: relative;

  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  grid-gap: 5px;

  transition: grid-gap 0.2s;

  .label {
    font-size: 14px;
    font-weight: 300;
    z-index: 2;
  }
}

</style>
