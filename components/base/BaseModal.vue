<template>
  <button class="open-button" @click="openModal" :ref="openButtonRef" type="button">
    <slot name="button" />
    <Teleport to="body">
      <div v-if="isOpen" class="modal-wrapper" @keydown.esc="closeModal">
        <div class="modal-content">
          <button @click="closeModal" :ref="closeButtonRef" type="button">Close Modal</button>
          <slot name="content" />
        </div>
      </div>
    </Teleport>
  </button>
</template>

<script setup>
  const isOpen = ref(false)

  // Use the global data composable
  const { pageHasModalOpen, setModalOpen } = useGlobalData()

  const openButtonRef = ref(null)
  const closeButtonRef = ref(null)

  const openModal = async () => {
    isOpen.value = true
    setModalOpen(true)
    await nextTick()
    await nextTick()
    closeButtonRef.value?.focus()
  }

  const closeModal = async () => {
    isOpen.value = false
    setModalOpen(false)
    await nextTick()
    await nextTick()
    openButtonRef.value?.focus()
  }
</script>

<style lang="postcss" scoped>
  .modal-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(1, 1, 1, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background-color: white;
    padding: 3rem;
  }

  .open-button:focus,
  .modal-content button:focus {
    background-color: red;
    color: white;
  }
</style>
