<script setup>
  import Typography from '@/components/atoms/Typography.vue'
  import Collapsible from '@/components/atoms/Collapsible.vue'
  import Icon from '@/components/atoms/Icon.vue'
  import Stack from '@/components/atoms/Stack.vue'

  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <section v-editable="blok" class="bg-gray-100 py-12 md:py-24 lg:py-36">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Typography variant="h2">{{ blok.title }}</Typography>
        </div>
        <div>
          <Stack as="ul" class="list-none">
            <li v-for="question in blok.content" :key="question.id">
              <Collapsible>
                <template #trigger>
                  <div
                    class="flex justify-between items-center bg-white px-6 py-4 border-t-2 border-secondary"
                  >
                    <Typography variant="body-large" class="text-left">{{
                      question.question
                    }}</Typography>
                    <Icon name="Plus" class="size-5" />
                  </div>
                </template>
                <template #content>
                  <div class="bg-white px-6 py-4 border-t">
                    <Typography class="font-light">{{ question.answer }}</Typography>
                  </div>
                </template>
              </Collapsible>
            </li>
          </Stack>
        </div>
      </div>
    </div>
  </section>
</template>
