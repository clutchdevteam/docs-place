<template>
  <section class="w-full">
    <div class="flex flex-col md:grid lg:grid-cols-2 h-full items-center">
      <div>
        <div class="md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0">
          <div class="mb-8">
            <BaseHeading class="font-bold text-primary-dark mb-4" size="h3" tag="h1"
              >Contact Us.</BaseHeading
            >
            <BaseText class="-mt-3">
              Do not hesitate to contact us with any questions or concerns regarding availability
              and admissions.
            </BaseText>
          </div>

          <form
            class="relative flex flex-col"
            name="Contact Form"
            @submit.prevent="handleSubmit"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <BaseInput class="mb-4" v-model="name" name="name" required>Name</BaseInput>

            <BaseInput class="mb-4" v-model="email" name="email" type="email" required
              >Email</BaseInput
            >

            <BaseInput class="mb-4" v-model="phone" name="phone" type="tel">Phone</BaseInput>

            <BaseTextarea class="mb-4" v-model="message" name="message" required
              >Message</BaseTextarea
            >

            <p class="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <input class="hidden" type="hidden" name="form-name" value="Contact Form" />

            <BaseButton type="submit">Send Message</BaseButton>

            <p
              v-if="responseMessage"
              :class="`${
                responseState === 'success' ? 'text-secondary-dark' : 'text-red-700'
              } text-sm absolute bottom-0 mb-[-44px]`"
            >
              {{ this.responseMessage }}
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

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      responseMessage: null,
      responseState: null,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact',
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        }),
      })
        .then((res, err) => {
          if (res.status === 200) {
            this.responseMessage = "Thanks for reaching out! We'll be in contact shortly!";
            this.responseState = 'success';
          } else {
            this.responseMessage = 'Oops! Looks like something went wrong. Please try again!';
            this.responseState = 'error';
          }
        })
        .catch((e) => console.error(e));
    },
  },
};
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
