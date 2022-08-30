<template>
  <div class="input__wrapper">
    <div class="input__container">
      <textarea v-if="getType === 'textarea'"
                v-model="value"
                ref="input"
                :placeholder="getPlaceholder"
                :readonly="props.readonly"
                :maxlength="props.maxlength"
                :class="[...getClasses, ...getAdditionalClasses, ...props.classes]"
                @keyup.enter="keyUpEnter"/>

      <input v-else
             :type="getType"
             v-model="value"
             ref="input"
             :readonly="props.readonly"
             :inputmode="getInputMode"
             :autocomplete="getAutoComplete"
             :step="props.step"
             :placeholder="getPlaceholder"
             :class="[...getClasses, ...getAdditionalClasses, ...props.classes]"
             @input="validateValue"
             @change="validateValue"
             @keydown="keyPress"
             @keyup.enter="keyUpEnter"/>

      <ButtonStyled v-if="getIconUrl" class="input-button"
                    :class="{'active': isActiveIcon}"
                    :iconUrl="getIconUrl"
                    :iconSize="24"
                    type="label"
                    @click="changeIsActiveIcon"/>
    </div>
  </div>
</template>

<script lang="ts">

const validators = {
  type: ['text', 'textarea', 'password', 'email', 'number', 'search', 'number-only', 'time'] as Array<string>,
};
export default {};
</script>

<script setup lang="ts">

import usePushNotificationStore from '@/app_core/push_notifications/store';

import {computed, ref, watch} from 'vue';

import ButtonStyled from '@/app_core/unit/components_styled/ButtonStyled.vue';


interface Props {
  placeholder?: string,
  modelValue?: string | number,
  type?: typeof validators.type[number],

  disabled?: boolean,
  maxlength?: number,
  minNumber?: number,
  maxNumber?: number,
  step?: number,

  autocomplete?: boolean,
  readonly?: boolean,

  classes?: string[],

  errorText?: boolean,
}

const pushNotificationStore = usePushNotificationStore();
const emit = defineEmits(['update:modelValue', 'keyUpEnter']);
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: validators.type[0],
  subtype: validators.subtype[0],
  minNumber: 0,
  maxNumber: 1e9,
  autocomplete: false,
  withCounter: true,
});
const typesForAutocomplete = ['password', 'email', 'text'];

// validators to props
if (process.env.NODE_ENV === 'development') {
  if (!validators.type.includes(props.type)) {
    console.warn(`InputComponent haven't define to ${props.type} type`);
  }
}

const input = ref<HTMLInputElement | null>(null);


const value = ref<string | number>(props.modelValue);
const isActiveIcon = ref(false);


const getType = computed(() => {
  if (props.type === 'password' && isActiveIcon.value) return 'input';
  if (props.type === 'number-only') return 'text';
  return props.type ? props.type : '';
});
const getIconUrl = computed(() => {
  switch (props.type) {
    case 'password':
      return '/icons/eye.svg';
    case 'search':
      return '/icons/search.svg';
    default:
      return undefined;
  }
});
const getPlaceholder = computed(() => props.placeholder ? props.placeholder : null);
const getSubtype = computed(() => props.subtype ? props.subtype : null);
const getClasses = computed(() => [
  `input`,
  `input__type__${getType.value}`,
  `input__subtype__${getSubtype.value}`,
  (props.errorText) ? 'input_error' : undefined,
  (props.disabled) ? `input__disabled` : undefined,
]);

const getAdditionalClasses = computed(() => [
  getIconUrl.value != null && 'input__with-icon',
  'label',
]);

const getInputMode = computed(() => {
  switch (props.type) {
    case 'number':
      return 'numeric';
    case 'search':
      return 'search';
    case 'email':
      return 'email';
    case 'number-only':
      return 'tel';
    default:
      return '';
  }
});

const getAutoComplete = computed(() => {
  let autocomplete = props.autocomplete;
  if (!autocomplete) {
    autocomplete = typesForAutocomplete.some((item) => item === getType.value);
  }
  return autocomplete ? 'on' : 'off';
});


const changeIsActiveIcon = (): void => {
  isActiveIcon.value = !isActiveIcon.value;
};

const validateValue = () => {
  if (props.type === 'number-only') {
    value.value = value.value.toString().replace(/[^\d]/g, '');
  }

  if (getType.value == 'number' || props.type === 'number-only') {
    if ((props.minNumber || props.minNumber === 0) && +value.value < Number(props.minNumber)) {
      value.value = props.minNumber;
    }
    if (props.maxNumber && +value.value > Number(props.maxNumber)) {
      value.value = props.maxNumber;
    }
  }
};

const increase = (flag = true) => {
  const sign = flag ? (props.step ?? 1) : -(props.step ?? 1);
  const result = +value.value + sign;
  if (result < +props.minNumber || result > +props.maxNumber) return;
  value.value = +result.toFixed(2);
};

const keyUpEnter = (): void => emit('keyUpEnter');

const copy = () => {
  if (!input.value) return;

  navigator.clipboard.writeText(input.value.value)
      .then(() => {
        pushNotificationStore.sendSuccessNotification('Copying to clipboard was successful!');
      })
      .catch((error) => {
        const message = 'Could not copy text: ' + error.toString();
        pushNotificationStore.sendErrorNotification(message);
      });
};

const keyPress = (evt: KeyboardEvent) => {
  if (props.type === 'number-only' || props.type === 'number') {
    switch (evt.key) {
      case 'ArrowUp':
        increase();
        evt.preventDefault();
        break;
      case 'ArrowDown':
        increase(false);
        evt.preventDefault();
        break;
    }
  }
};


watch(() => props.modelValue, () => value.value = props.modelValue);
watch(value, (value) => emit('update:modelValue', value));

</script>

<style lang="scss">
@import '../../../assets/styles/base';

.input {
  width: 100%;
  transition: all .2s;
  font-size: 16px;

  &__wrapper {
    width: 100%;

    display: grid;
    grid-auto-columns: 1fr max-content;
    grid-auto-flow: column;
    grid-gap: 10px;
  }

  &__container {
    width: 100%;
    position: relative;

    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
  }

  &__with-icon{
    padding-right: 41px;
  }

  &-button {
    width: max-content;
    position: absolute;
    right: 0;
    height: 100%;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    &.button {
      &:hover{
        background: unset;
      }
    }

    .icon {
      background: $icon-gray;
    }
    &:hover{
      transform: scale(1.04);
    }

    &.active {
      .icon {
        border: none;
        background: $icon-black;
      }
    }
  }

  &__disabled {
    cursor: default;
    pointer-events: none;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-search-cancel-button{
    display: none;
  }

  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
}

</style>
