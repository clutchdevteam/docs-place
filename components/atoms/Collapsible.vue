<script setup>
  import {
    CollapsibleRoot,
    CollapsibleTrigger,
    CollapsibleContent,
    useForwardPropsEmits,
  } from 'reka-ui'

  const props = defineProps()

  const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <CollapsibleRoot
    v-slot="{ open }"
    data-slot="collapsible"
    v-bind="forwarded"
    class="rounded-md bg-card drop-shadow"
  >
    <CollapsibleTrigger class="w-full">
      <slot name="trigger" />
    </CollapsibleTrigger>
    <CollapsibleContent>
      <slot name="content" />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
