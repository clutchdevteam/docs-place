<template>
  <div class="w-full">
    <PageTitle
      :blok="{
        heading: 'Articles',
        text: 'Read our latest articles',
      }"
    />

    <section v-if="articlePosts.length > 0" class="container mx-auto py-12 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in articlePosts"
          :key="post.uuid"
          class="border border-gray-100 border-l-secondary border-l-2"
        >
          <NuxtLink :to="`/articles/${post.slug}`">
            <div class="flex p-6 items-center">
              <div class="aspect-square overflow-hidden w-1/2">
                <img
                  v-if="post?.content?.body[0]?.image?.filename"
                  :src="post?.content?.body[0]?.image.filename"
                  :alt="post?.content?.body[0]?.image.alt || post.name"
                  class="object-cover h-full"
                />
              </div>
              <div class="p-6">
                <Typography variant="h3" class="mb-3">{{ post.name }}</Typography>
                <div class="flex items-center gap-2">
                  <Icon name="Clock" class="size-4 text-secondary" />
                  <time v-if="post.published_at" class="opacity-60">
                    {{ formatDate(post.published_at) }}
                  </time>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import Typography from '@/components/atoms/Typography.vue'
  import Icon from '@/components/atoms/Icon.vue'
  import { useGlobalData } from '@/composables/useGlobalData'

  const { setIsHomepage } = useGlobalData()

  setIsHomepage(false)

  // Determine version and API key based on environment
  const isDevelopment = process.env.ENV === 'develop'
  const version = isDevelopment ? 'draft' : 'published'
  const apiKey = isDevelopment
    ? useRuntimeConfig().public.storyblokPreviewApiKey
    : useRuntimeConfig().public.storyblokApiKey

  const api = useStoryblokApi()

  // Fetch all articles nested under /article
  const { data: articlePostsData } = await api.get('cdn/stories', {
    version: version,
    starts_with: 'articles/',
    is_startpage: false,
    per_page: 50,
  })

  const articlePosts = computed(() => {
    return articlePostsData?.stories || []
  })

  // Format date helper
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
  }
</script>
