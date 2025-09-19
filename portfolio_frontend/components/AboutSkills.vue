<template>
  <section id="about" class="section">
    <div class="container grid cols-2">
      <div class="card" style="padding:1.5rem;">
        <div class="badge">About</div>
        <h2 style="margin:.35rem 0 1rem;">Who I Am</h2>
        <p style="color: var(--ocean-muted);">
          I’m a frontend engineer passionate about crafting user-centric products. I focus on high-quality
          design systems, accessibility, and performance. I thrive on turning complex problems into delightful,
          intuitive experiences.
        </p>
        <ul class="bullets">
          <li>Obsessed with UX details and polish</li>
          <li>Strong collaboration and mentorship</li>
          <li>Data-informed decisions, continuous improvement</li>
        </ul>
        <a href="#contact" class="btn" style="margin-top:.5rem;">Work with me</a>
      </div>

      <div id="skills" class="card" style="padding:1.5rem;">
        <div class="badge">Skills</div>
        <h2 style="margin:.35rem 0 1rem;">What I Use</h2>
        <div class="grid cols-3">
          <div v-for="s in skills" :key="s.name" class="skill">
            <div class="icon" :style="{ color: s.color }">◆</div>
            <strong>{{ s.name }}</strong>
            <span>{{ s.level }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Skill = { name: string; level: string; color: string }
const skills: Skill[] = [
  { name: 'Vue/Nuxt', level: 'Expert', color: 'var(--ocean-primary)' },
  { name: 'TypeScript', level: 'Advanced', color: 'var(--ocean-secondary)' },
  { name: 'Accessibility', level: 'Advanced', color: '#10b981' },
  { name: 'Design Systems', level: 'Advanced', color: '#8b5cf6' },
  { name: 'Performance', level: 'Advanced', color: '#ef4444' },
  { name: 'Testing', level: 'Intermediate', color: '#14b8a6' }
]
</script>

<style scoped>
.bullets {
  margin: .75rem 0 0;
  padding-left: 1rem;
  color: var(--ocean-text);
}
.bullets li { margin: .25rem 0; }
.skill {
  padding: .9rem;
  border-radius: 12px;
  border: 1px solid rgba(17,24,39,.08);
  background: white;
  display: grid;
  gap: .2rem;
  place-items: start;
  box-shadow: 0 6px 18px rgba(17,24,39,.05);
}
.skill .icon { font-size: 1.1rem; }
.skill span { color: var(--ocean-muted); font-size: .85rem; }
</style>
