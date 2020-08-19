<template>
  <component
    class="ui-radio"
    :class="states"
    :is="tag"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @mousedown="onMouseDown"
  >
    <input
      ref="input"
      type="radio"
      class="visually-hidden"
      v-bind="$attrs"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      v-on="listeners"
    />

    <slot v-bind="states">
      <span class="checkmark" />
    </slot>
  </component>
</template>

<script>
const noop = () => {};

export default {
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    // event: 'input',
    event: 'change',
  },
  props: {
    // `modelValue` is v-model prop
    modelValue: null,
    // `value` is for <input[value]>
    value: {
      type: null,
      required: true,
    },
    disabled: Boolean,
    error: Boolean,
    tag: {
      type: String,
      default: 'span',
    },
  },
  data: () => ({
    hover: false,
    focus: false,
    active: false,
  }),
  computed: {
    checked() {
      return this.modelValue === this.value || this.$attrs.checked;
    },

    listeners() {
      return {
        ...this.$listeners,
        focus: e => {
          this.focus = true;
          (this.$listeners.focus || noop)(e);
        },
        blur: e => {
          this.focus = false;
          (this.$listeners.blur || noop)(e);
        },
        // ya.browser не умеет в событие `input` для radio
        // input: e => {
        //   const value = e.target.checked ? this.value : null;
        //   this.$emit('input', value);
        // },
        change: e => {
          const value = e.target.checked ? this.value : null;
          this.$emit('change', value);
        },
      };
    },

    states() {
      const { checked, disabled, error, hover, focus, active } = this;
      return {
        checked,
        disabled,
        error,
        hover,
        focus,
        active,
      };
    },
  },
  methods: {
    onMouseDown() {
      this.active = true;

      document.addEventListener('mouseup', () => (this.active = false), {
        once: true,
      });
    },

    findRelatedLabelNode() {
      if (typeof this.relatedLabelNode !== 'undefined') {
        return this.relatedLabelNode;
      }

      let labelNode = this.$refs.input.closest('label');
      if (!labelNode && this.$attrs.id) {
        labelNode = document.querySelector(`label[for="${this.$attrs.id}"]`);
      }

      this.relatedLabelNode = labelNode || null;
      return this.relatedLabelNode;
    },
  },
  mounted() {
    const labelNode = this.findRelatedLabelNode();
    if (!labelNode) return;

    this.labelMousedownListener = e => this.onMouseDown(e);
    labelNode.addEventListener('mousedown', this.labelMousedownListener);
  },
  beforeDestroy() {
    const labelNode = this.findRelatedLabelNode();
    if (!labelNode) return;

    labelNode.removeEventListener('mousedown', this.labelMousedownListener);
  },
};
</script>

<style lang="scss" scoped>
.ui-radio {
  box-sizing: border-box;
  display: inline-block;

  .checkmark {
    $size: 18px;
    width: $size;
    height: $size;
    display: block;
    user-select: none;
  }

  &.hover:not(.disabled) {
    .checkmark {
    }

    &:not(.error) {
      .checkmark {
      }
    }
  }
  &.focus:not(.disabled) {
    .checkmark {
    }
  }
  &.active:not(.disabled) {
    .checkmark {
    }
  }
  &.disabled {
    .checkmark {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  &.error {
    .checkmark {
    }
  }

  &.checked {
    .checkmark {
    }
  }
}
</style>
