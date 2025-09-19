<template>
  <section id="projects" class="section">
    <div class="container">
      <div style="display:flex; align-items:end; justify-content:space-between; gap:1rem; flex-wrap: wrap; margin-bottom: .75rem;">
        <div>
          <div class="badge">Featured Work</div>
          <h2 style="margin:.35rem 0 0;">Projects</h2>
        </div>
        <a class="link" href="#">See all →</a>
      </div>

      <div class="grid cols-3">
        <article v-for="p in projects" :key="p.id" class="card project-card">
          <div class="thumb" :style="{ background: p.bg }" role="img" :aria-label="p.title"></div>
          <div class="content">
            <h3>{{ p.title }}</h3>
            <p class="desc">{{ p.description }}</p>
            <div class="tags">
              <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
            </div>
            <div class="actions">
              <a :href="p.link" class="btn ghost">Details</a>
              <a :href="p.repo" class="btn ghost">Code</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  repo: string
  bg: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics with crisp UI and smooth interactions.',
    tags: ['Nuxt 3', 'TypeScript', 'Charting'],
    link: '#',
    repo: '#',
    bg: 'linear-gradient(135deg, rgba(59,130,246,.25), rgba(249,250,251,1))'
  },
  {
    id: 2,
    title: 'E-Commerce UI',
    description: 'Accessible, fast, and scalable shopping experience.',
    tags: ['Vue 3', 'Accessibility', 'Design System'],
    link: '#',
    repo: '#',
    bg: 'linear-gradient(135deg, rgba(245,158,11,.25), rgba(249,250,251,1))'
  },
  {
    id: 3,
    title: 'Marketing Site',
    description: 'SEO-friendly site with optimized performance and UX.',
    tags: ['Nuxt Content', 'SEO', 'Animations'],
    link: '#',
    repo: '#',
    bg: 'linear-gradient(135deg, rgba(59,130,246,.2), rgba(245,158,11,.15))'
  }
]
</script>

<style scoped>
.project-card {
  overflow: hidden;
  transition: transform .15s ease, box-shadow .15s ease;
}
.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(17,24,39,.08);
}
.thumb {
  height: 160px;
  background-size: cover;
  background-position: center;
}
.content { padding: 1rem; }
.content h3 { margin: .25rem 0 .35rem; }
.desc { margin: 0 0 .75rem; color: var(--ocean-muted); }
.tags { display:flex; gap: .5rem; flex-wrap: wrap; margin-bottom: .75rem; }
.tag {
  font-size: .8rem; padding: .25rem .55rem; border-radius: 999px;
  background: rgba(17,24,39,.04); border: 1px solid rgba(17,24,39,.08);
  color: var(--ocean-text);
}
.actions { display: flex; gap: .5rem; }
</style>
