<template>
  <ButtonComponent :class="[...getClasses, ...getAdditionalClasses]"
                   :disabled="props.disabled"/>
</template>


<script lang="ts">

export const componentName = 'ButtonStyled';
export const componentNameClass = 'button';

export const noClassAttributes = ['disabled'];
export const validators = {
  type: ['main', 'label'] as string[],
  subtype: ['main-first', 'label-blue', 'label-icon'] as string[],
  disabled: [true, false] as boolean[],
};

export default {};
</script>


<script setup lang="ts">
import {computed} from 'vue';
import classesFromPropsHook from '@/app_core/core/assets/scripts/hooks/classesFromPropsHook';

import ButtonComponent from '@/app_core/unit/components/ButtonComponent.vue';


interface IProps {
  type?: typeof validators.type[number],
  subtype?: typeof validators.subtype[number],
  disabled?: boolean,
}


const props = defineProps<IProps>();
const {getClasses} = classesFromPropsHook(props,
    componentName, componentNameClass, noClassAttributes, validators);

const getAdditionalClasses = computed(() => [
  props.disabled && `button__subtype__${props.subtype}__disabled`,
]);

</script>

<style lang="scss">
@import '../../../assets/styles/base.scss';

.button {
  &__type {
    &__main {
      padding: 8px 30px;
      border-radius: 10px;
    }

    &__label {
      width: max-content;
      padding: 0;

      justify-content: inherit;

      border: none;
      border-radius: 0;

      &:hover {
        border: none;
        background: unset;
        transform: scale(1.1);
      }

      .icon {
        background: none;
      }
    }
  }

  &__subtype {
    &__main {
      &-first {
        border: 1px solid $main-blue;
        .label{
          color: $main-blue;
        }

        &:hover {
          background: $main-blue;
          border: 1px solid $main-blue;
          .label{
            color: $white;
          }
        }

        &__disabled {
          background: $background-gray;
          border: 1px solid $background-gray;

          .label{
            color: $white;
          }
        }
      }
    }

    &__label {
      &-blue {
        .label{
          color: $main-blue;
        }

        .icon {
          background: none;
        }

        &__disabled {
          .label {
            color: $background-gray;
          }
        }
      }

      &-icon {
        &__disabled{
          .icon {
            opacity: 0.5;
          }
        }
      }
    }
  }
}

</style>
