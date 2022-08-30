<template>
  <CheckboxComponent :class="[...getClasses]"/>
</template>

<script lang="ts">
export const componentName = 'CheckboxStyled';
export const componentNameClass = 'checkbox';

export const noClassAttributes = [''];
export const validators = {
  type: ['main'] as string[],
  subtype: [
    'main-first',
  ] as string[],
};

export default {};
</script>

<script lang="ts" setup>
import CheckboxComponent from '@/app_core/unit/components/CheckboxComponent.vue';
import classesFromPropsHook from '@/app_core/core/assets/scripts/hooks/classesFromPropsHook';

interface IProps {
  type?: typeof validators.type[number],
  subtype?: typeof validators.subtype[number],
}


const props = defineProps<IProps>();
const {getClasses} = classesFromPropsHook(props,
    componentName, componentNameClass, noClassAttributes, validators);
</script>

<style lang="scss">
@import "src/assets/styles/base";

.checkbox {
  &__type {
    &__main {
      .checkbox__mark {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: solid 1px;
        padding: 4px;

        &:after {
          top: 4px;
          bottom: 4px;
          left: 4px;
          right: 4px;

          background-color: $main-blue;
          border-radius: 50%;
        }
      }
    }
  }

  &__subtype {
    &__main {
      &-first {
        .checkbox__mark {
          border-color: $main-blue;

          &:after {
            background-color: $main-blue;
          }
        }

        .label {
          color: $black;
        }
      }
    }
  }
}
</style>
