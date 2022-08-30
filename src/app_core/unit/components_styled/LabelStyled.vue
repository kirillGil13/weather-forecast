<template>
  <LabelComponent :class="getClasses"/>
</template>


<script lang="ts">

export const componentName = 'LabelStyled';
export const componentNameClass = 'label';

export const noClassAttributes = [];
export const validators = {
  color: ['white', 'black', 'blue'] as Array<string>,
};

export default {};
</script>


<script setup lang="ts">
import classesFromPropsHook from '@/app_core/core/assets/scripts/hooks/classesFromPropsHook';

import LabelComponent from '@/app_core/unit/components/LabelComponent.vue';


interface IProps {
  color?: typeof validators.color[number],
}


const props = defineProps<IProps>();
const {getClasses} = classesFromPropsHook(props,
    componentName, componentNameClass, noClassAttributes, validators);

</script>

<style lang="scss">
@import '../../../assets/styles/base.scss';

.label {
  &__color {
    &__white    { color: $white;        }
    &__black    { color: $black;        }
    &__blue     { color: $text-blue;    }
  }
}

</style>
