<template>
  <form @submit.prevent="onSubmit" class="grid" style="gap: 1rem;">
    <div>
      <div class="badge">Contact</div>
      <h2 style="margin:.35rem 0 0;">Let’s build something great</h2>
      <p style="color: var(--ocean-muted); margin: .25rem 0 0;">
        Have a project in mind or just want to say hi? Drop a message and I’ll get back to you.
      </p>
    </div>

    <div class="grid cols-2">
      <div>
        <label for="name"><strong>Name</strong></label>
        <input id="name" v-model="form.name" class="input" placeholder="Your name" required aria-required="true" autocomplete="name" />
      </div>
      <div>
        <label for="email"><strong>Email</strong></label>
        <input id="email" v-model="form.email" class="input" type="email" placeholder="you@example.com" required aria-required="true" autocomplete="email" />
      </div>
    </div>

    <div>
      <label for="message"><strong>Message</strong></label>
      <textarea id="message" v-model="form.message" class="textarea" placeholder="Tell me about your project..." required aria-required="true" />
    </div>

    <div style="display:flex; gap:.75rem; align-items:center; flex-wrap: wrap;">
      <button class="btn" type="submit" :disabled="submitting">
        <span v-if="!submitting">Send message</span>
        <span v-else>Sending…</span>
      </button>
      <p v-if="status" :style="{ color: statusColor }" style="margin:0; font-weight:600;">
        {{ status }}
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

type FormState = { name: string; email: string; message: string }
const form = reactive<FormState>({ name: '', email: '', message: '' })
const submitting = ref(false)
const success = ref<boolean | null>(null)
const status = computed(() => {
  if (success.value === true) return 'Thanks! I will get back to you soon.'
  if (success.value === false) return 'Something went wrong. Please try again.'
  return ''
})
const statusColor = computed(() => success.value ? 'var(--ocean-secondary)' : 'var(--ocean-error)')

async function fakeNetwork(duration = 900) {
  return new Promise((res) => setTimeout(res, duration))
}

// PUBLIC_INTERFACE
async function onSubmit() {
  /** Handle contact form submission with optimistic UI and basic validation feedback. */
  if (!form.name || !form.email || !form.message) {
    success.value = false
    return
  }
  submitting.value = true
  success.value = null
  try {
    // Here you could POST to an API endpoint.
    await fakeNetwork()
    success.value = true
    // Reset the form after success
    form.name = ''; form.email = ''; form.message = ''
  } catch (e) {
    console.error(e)
    success.value = false
  } finally {
    submitting.value = false
  }
}
</script>
