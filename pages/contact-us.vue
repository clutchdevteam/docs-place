<template>
  <div class="w-full">
    <PageTitle
      :blok="{
        heading: 'Contact Us.',
        text: 'Do not hesitate to contact us with any questions or concerns regarding availability and admissions.',
      }"
    />

    <div class="flex flex-col lg:grid lg:grid-cols-2 items-center">
      <div class="mb-10 py-10 lg:py-0">
        <div class="lg:w-3/4 mx-auto px-4 lg:px-0 py-3">
          <div class="mb-8">
            <Typography variant="h2" class="mb-4"> Contact Us. </Typography>
            <Typography>
              Do not hesitate to contact us with any questions or concerns regarding availability
              and admissions.
            </Typography>
          </div>

          <form class="relative flex flex-col" @submit.prevent="handleSubmit">
            <Input class="hidden" type="hidden" name="form-name" value="contact" />

            <Stack space="small">
              <Input v-model="form.name" name="name" required>Name</Input>

              <Input v-model="form.email" name="email" type="email" required> Email </Input>

              <Input v-model="form.phone" name="phone" type="tel">Phone</Input>

              <Textarea v-model="form.message" name="message" rows="4" required> Message </Textarea>
            </Stack>

            <p class="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <div class="mt-6">
              <Button type="submit" theme="primary-outline" icon="ArrowRight" iconPosition="right"
                >Send Message</Button
              >
            </div>

            <Typography
              v-if="responseMessage"
              :class="responseState === 'success' ? 'text-secondary' : 'text-red-700'"
            >
              {{ responseMessage }}
            </Typography>
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
  </div>
</template>

<script setup>
  import Typography from '@/components/atoms/Typography.vue'
  import Stack from '@/components/atoms/Stack.vue'
  import Input from '@/components/atoms/Input.vue'
  import Textarea from '@/components/atoms/Textarea.vue'
  import Button from '@/components/atoms/Button.vue'

  // Form data
  const form = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const responseMessage = ref(null)
  const responseState = ref(null)

  const slug = useRoute().params.slug

  const path = slug && slug.length > 0 ? slug.join('/') : 'contact-us'

  // Use the global data composable
  const { setIsHomepage } = useGlobalData()

  setIsHomepage(false)

  // Determine version and API key based on environment
  const isDevelopment = process.env.ENV === 'develop'
  const version = isDevelopment ? 'draft' : 'published'
  const apiKey = isDevelopment
    ? useRuntimeConfig().public.storyblokPreviewApiKey
    : useRuntimeConfig().public.storyblokApiKey

  const { story } = await useAsyncStoryblok(path, {
    api: {
      version: version,
    },
  })

  // Handle Storyblok bridge for live editing
  onMounted(() => {
    if (window.storyblok) {
      window.storyblok.init({
        accessToken: apiKey,
      })

      window.storyblok.on(['input', 'published', 'change'], (event) => {
        if (event.action === 'input') {
          if (event.story.id === story.value.id) {
            story.value.content = event.story.content
          }
        } else {
          window.location.reload()
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
