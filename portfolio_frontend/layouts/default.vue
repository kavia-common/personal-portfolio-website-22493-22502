<template>
  <div>
    <header class="container" style="padding-top: 1rem;">
      <div class="card" style="padding: .75rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
        <div style="display:flex; align-items:center; gap:.75rem;">
          <LogoMark />
          <strong style="font-size: 1rem;">Ocean Portfolio</strong>
        </div>
        <nav style="display:flex; align-items:center; gap: 1rem;">
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="#contact" class="btn ghost">Let's talk</a>
        </nav>
      </div>
    </header>

    <main>
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
/**
 * Default layout includes:
 * - Top navigation with brand and anchor links
 * - Footer with ContactForm and social/contact info
 */
</script>
