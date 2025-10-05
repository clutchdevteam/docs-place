<template>
  <section class="w-full overflow-y-hidden">
    <div class="flex flex-col lg:grid lg:grid-cols-2 h-full items-center">
      <div class="mb-10 py-10 lg:py-0">
        <div class="lg:w-3/4 mx-auto px-4 lg:px-0">
          <div class="mb-8">
            <BaseHeading class="font-bold text-primary-dark mb-4" size="h3" tag="h1"
              >Contact Us.</BaseHeading
            >
            <BaseText class="-mt-3">
              Do not hesitate to contact us with any questions or concerns regarding availability
              and admissions.
            </BaseText>
          </div>

          <form class="relative flex flex-col" @submit.prevent="handleSubmit">
            <input class="hidden" type="hidden" name="form-name" value="contact" />

            <BaseInput class="mb-4" v-model="form.name" name="name" required>Name</BaseInput>

            <BaseInput class="mb-4" v-model="form.email" name="email" type="email" required>
              Email
            </BaseInput>

            <BaseInput class="mb-4" v-model="form.phone" name="phone" type="tel">Phone</BaseInput>

            <BaseTextarea class="mb-4" v-model="form.message" name="message" required>
              Message
            </BaseTextarea>

            <p class="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <BaseButton type="submit">Send Message</BaseButton>

            <p
              v-if="responseMessage"
              :class="`${
                responseState === 'success' ? 'text-secondary-dark' : 'text-red-700'
              } text-sm absolute bottom-0 mb-[-42px]`"
            >
              {{ responseMessage }}
            </p>
          </form>
        </div>
      </div>

      <div class="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.859245692116!2d-81.49083228485871!3d31.141423481496503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e4d83f55b86a95%3A0x10f957e1e02179e8!2s902%20Halifax%20Square%2C%20Brunswick%2C%20GA%2031520!5e0!3m2!1sen!2sus!4v1644460896068!5m2!1sen!2sus"
          style="border: 0"
          allowfullscreen=""
          class="h-full w-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
  const route = useRoute()
  const router = useRouter()

  // Form data
  const form = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const responseMessage = ref(null)
  const responseState = ref(null)

  // Get the full slug for the current route
  const fullSlug = route.path === '/' ? 'home' : route.path.replace(/^\//, '')

  // Set version based on environment and query params
  const version = route.query._storyblok || process.dev ? 'draft' : 'published'

  // Fetch the story using the new Storyblok composable
  const { story } = await useAsyncStoryblok(fullSlug, {
    version: version,
    resolveRelations: ['featured-articles.articles'],
  }).catch(() => {
    // Fallback if Storyblok is not configured
    return { story: { content: { component: 'page' } } }
  })

  // Handle Storyblok bridge for live editing
  onMounted(() => {
    if (window.storyblok) {
      window.storyblok.init({
        accessToken: useRuntimeConfig().public.storyblokPreviewApiKey,
      })

      window.storyblok.on(['input', 'published', 'change'], (event) => {
        if (event.action === 'input') {
          if (event.story.id === story.value.id) {
            story.value.content = event.story.content
          }
        } else {
          router.go(0) // Reload the page
        }
      })
    }
  })

  // Form handling methods
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  }

  const handleSubmit = () => {
    fetch('/', {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...form.value,
      }),
    })
      .then((res, err) => {
        if (res.status === 200) {
          responseMessage.value = "Thanks for reaching out! We'll be in contact shortly!"
          responseState.value = 'success'

          form.value.name = ''
          form.value.email = ''
          form.value.phone = ''
          form.value.message = ''
        } else {
          responseMessage.value = 'Oops! Looks like something went wrong. Please try again!'
          responseState.value = 'error'
        }
      })
      .catch((e) => console.error(e))
  }
</script>

<style lang="postcss" scoped>
  section {
    height: 125vh;
  }

  @media (min-width: 768px) {
    section {
      height: calc(100vh - 74.95px);
    }
  }
</style>
