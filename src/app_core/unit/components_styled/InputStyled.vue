<template>
  <InputComponent :classes="[...getClasses, ...getAdditionalClasses]"
                  :disabled="props.disabled"/>
</template>


<script lang="ts">

export const componentName = 'InputStyled';
export const componentNameClass = 'input';

export const noClassAttributes = ['disabled'];
export const validators = {
  subtype: ['main'] as string[],
  disabled: [true, false] as boolean[],
};

export default {};
</script>


<script setup lang="ts">
import {computed} from 'vue';
import classesFromPropsHook from '@/app_core/core/assets/scripts/hooks/classesFromPropsHook';

import InputComponent from '@/app_core/unit/components/InputComponent.vue';


interface IProps {
  subtype?: typeof validators.subtype[number],
  disabled?: typeof validators.disabled[number],
}


const props = defineProps<IProps>();
const {getClasses} = classesFromPropsHook(props,
    componentName, componentNameClass, noClassAttributes, validators);

const getAdditionalClasses = computed(() => [
  props.disabled && `input__subtype__${props.subtype}__disabled`,
]);

</script>


<style lang="scss">
@import '../../../assets/styles/base.scss';

@mixin subtype-main() {
  padding: 8.5px 15px;

  border-bottom: 3px solid $input-gray;
  height: 36px;

  transition: all .2s;

  &:hover,
  &:focus,
  &:active {
    border-bottom: 3px solid $main-blue;
  }

  &.input__with-icon {
    padding-right: 41px;

    @include respond-to('iphone-8') {
      padding-right: 35px;
    }
  }
}

.input {
  &__subtype {
    &__main {
      @include subtype-main();
    }
  }
}

</style>
