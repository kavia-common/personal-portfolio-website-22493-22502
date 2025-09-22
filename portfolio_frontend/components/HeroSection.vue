<template>
  <section class="section hero-gradient">
    <div class="container">
      <div class="card" style="padding: 2rem; overflow: hidden; position: relative;">
        <div class="badge" style="position:absolute; top: 1rem; right: 1rem;">
          <span aria-hidden="true">🌊</span> Ocean Professional
        </div>

        <div style="display:flex; align-items:center; gap: 2rem; flex-wrap: wrap;">
          <div style="flex: 1 1 380px;">
            <h1 style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin: 0 0 .5rem;">
              Hi, I’m <span style="color: var(--ocean-primary)">Alex</span> — building delightful web experiences.
            </h1>
            <p style="color: var(--ocean-muted); margin: 0 0 1.25rem; max-width:65ch;">
              Frontend engineer focused on performance, accessibility, and elegant UI. I turn complex ideas into simple, beautiful, and responsive interfaces.
            </p>
            <div style="display:flex; gap: .75rem; flex-wrap: wrap;">
              <a href="#projects" class="btn">View Projects</a>
              <a href="#contact" class="btn secondary">Contact</a>
              <a href="#about" class="btn ghost">About me</a>
            </div>
          </div>

          <div class="card accent-gradient" style="flex: 1 1 280px; padding: 1.25rem; text-align:center;">
            <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: .75rem;">
              <div class="miniStat">
                <strong>5+</strong>
                <span>Years</span>
              </div>
              <div class="miniStat">
                <strong>30+</strong>
                <span>Projects</span>
              </div>
              <div class="miniStat">
                <strong>10x</strong>
                <span>Impact</span>
              </div>
            </div>
            <p style="margin:.75rem 0 0; color: var(--ocean-muted); font-size:.9rem;">
              Performance-minded, user-focused delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* Presentation-only hero component */
</script>

<style scoped>
.miniStat {
  background: white;
  border: 1px solid rgba(17, 24, 39, 0.06);
  border-radius: 12px;
  padding: .75rem;
  display: grid;
  place-items: center;
  gap: .2rem;
  box-shadow: 0 8px 20px rgba(17,24,39,.05);
}
.miniStat strong { font-size: 1.25rem; color: var(--ocean-primary); }
.miniStat span { color: var(--ocean-muted); font-weight: 600; font-size: .8rem; }
</style>
