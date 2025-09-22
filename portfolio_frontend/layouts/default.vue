<template>
  <div>
    <a href="#main" style="position:absolute; left:-9999px;" class="skip">Skip to content</a>

    <header class="container" style="padding-top: 1rem;">
      <div class="card" style="padding: .75rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
        <div style="display:flex; align-items:center; gap:.75rem;">
          <LogoMark />
          <strong style="font-size: 1rem;">Ocean Portfolio</strong>
        </div>

        <button
          class="btn ghost"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle navigation menu"
          aria-expanded="mobileOpen"
          style="display:none;"
          id="mobile-menu-button"
        >
          Menu
        </button>

        <nav class="topnav">
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="#contact" class="btn ghost">Let's talk</a>
        </nav>
      </div>

      <nav v-if="mobileOpen" class="card mobile-nav">
        <a href="#projects" class="nav-link" @click="mobileOpen=false">Projects</a>
        <a href="#about" class="nav-link" @click="mobileOpen=false">About</a>
        <a href="#skills" class="nav-link" @click="mobileOpen=false">Skills</a>
        <a href="#contact" class="nav-link" @click="mobileOpen=false">Contact</a>
        <a href="#contact" class="btn ghost" @click="mobileOpen=false">Let's talk</a>
      </nav>
    </header>

    <main id="main">
      <slot />
    </main>

    <footer id="contact" class="section">
      <div class="container">
        <div class="card" style="padding: 2rem;">
          <ContactForm />
          <div class="hr" />
          <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap: wrap;">
            <div style="display:flex; align-items:center; gap:.5rem;">
              <LogoMark />
              <span style="font-weight: 700;">Ocean Portfolio</span>
            </div>
            <div style="display:flex; gap: .75rem; flex-wrap: wrap;">
              <a class="link" href="mailto:hello@example.com">hello@example.com</a>
              <a class="link" href="#" aria-label="LinkedIn">LinkedIn</a>
              <a class="link" href="#" aria-label="GitHub">GitHub</a>
              <a class="link" href="#" aria-label="Twitter">Twitter/X</a>
            </div>
          </div>
        </div>
        <p style="text-align:center; color: var(--ocean-muted); margin-top: 1rem;">
          © {{ new Date().getFullYear() }} Ocean Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
/**
 * Default layout includes:
 * - Top navigation with brand and anchor links
 * - Footer with ContactForm and social/contact info
 * Also adds a responsive mobile menu and skip link for accessibility.
 */
const mobileOpen = ref(false)

onMounted(() => {
  const mq = window.matchMedia('(max-width: 800px)')
  const btn = document.getElementById('mobile-menu-button')
  const apply = () => {
    if (!btn) return
    btn.style.display = mq.matches ? 'inline-flex' : 'none'
  }
  apply()
  mq.addEventListener('change', apply)
})
</script>

<style scoped>
.topnav {
  display:flex; align-items:center; gap: 1rem;
}
.mobile-nav {
  margin: .75rem auto 0;
  padding: .5rem 1rem;
  display: grid;
  gap: .5rem;
  max-width: 1100px;
}
.skip:focus {
  position: static;
  margin: .5rem;
  padding: .5rem .75rem;
  z-index: 50;
  background: #fff;
  border-radius: 8px;
  box-shadow: var(--ocean-ring);
}
@media (max-width: 800px) {
  .topnav { display: none; }
}
</style>
