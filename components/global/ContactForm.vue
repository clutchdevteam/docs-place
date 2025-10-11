<script setup>
  import Input from '@/components/atoms/Input.vue'
  import Typography from '@/components/atoms/Typography.vue'
  import Stack from '@/components/atoms/Stack.vue'
  import Textarea from '@/components/atoms/Textarea.vue'
  import Button from '@/components/atoms/Button.vue'
  import Icon from '@/components/atoms/Icon.vue'

  function encode(data) {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  }

  const form = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const responseMessage = ref(null)
  const responseState = ref(null)

  function handleSubmit() {
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

<template>
  <section class="relative mb-1">
    <div class="relative z-10 container mx-auto py-12 lg:py-24">
      <Stack class="items-center" space="xlarge">
        <Stack space="small" class="items-center justify-center">
          <Typography variant="body-small" class="text-secondary uppercase">
            How to find us
          </Typography>
          <Typography variant="h2" class="uppercase">Contact Us.</Typography>
        </Stack>

        <div class="grid lg:grid-cols-2 gap-12 w-full">
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
              :class="responseState === 'success' ? 'text-gray-400-dark' : 'text-red-700'"
            >
              {{ responseMessage }}
            </Typography>
          </form>
          <div>
            <Stack>
              <Stack space="small" class="lg:items-end">
                <Typography variant="h3" class="text-secondary uppercase"
                  >Support Available 24/7</Typography
                >
                <div class="flex items-center gap-2">
                  <Icon name="Phone" class="size-4 text-secondary" />
                  <a href="tel:+19125069794" variant="body-small" class="uppercase">
                    +1 (912) 506-9794
                  </a>
                </div>
              </Stack>

              <Stack space="small" class="lg:items-end">
                <Typography variant="h4">Our address</Typography>

                <address class="lg:text-right">
                  <Typography>
                    902 Halifax Square,<br />
                    Brunswick, GA 31520
                  </Typography>
                </address>
              </Stack>
            </Stack>
          </div>
        </div>
      </Stack>
    </div>

    <div class="absolute inset-0">
      <img
        src="/static/content-bg.jpg"
        alt="Content Background"
        class="object-contain object-bottom w-full h-full"
      />
    </div>
  </section>
</template>
