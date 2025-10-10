<template>
  <div class="relative flex flex-col" :class="{ 'opacity-50': disabled }">
    <Typography
      variant="label-small"
      as="label"
      class="overflow-wrap uppercase"
      :class="$slots.description ? 'mb-1' : 'mb-2'"
      :for="id"
    >
      <slot />
      <span v-if="required" class="text-red-500">*</span>
    </Typography>

    <template v-if="$slots.description">
      <p class="text-xs mb-2 lg:w-3/4 opacity-50 overflow-wrap">
        <slot name="description" />
      </p>
    </template>

    <textarea
      :id="id"
      class="border border-gray-300 p-3 border-t-2 border-t-secondary"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
  import { v4 as uuidv4 } from 'uuid'

  const id = uuidv4()

  defineProps({
    modelValue: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
      validator: (value) => {
        const validProps = ['text', 'email', 'tel', 'url', 'search', 'date']
        return validProps.includes(value)
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  })
  defineEmits(['update:modelValue'])
</script>
