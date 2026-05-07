<template>
  <div class="max-w-3xl mx-auto space-y-12">
    <header class="space-y-6">
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Over CodeBlog.nl
      </h1>
      <p class="text-xl text-gray-500 dark:text-gray-400 leading-relaxed italic">
        Full-stack content, gewoon in het Nederlands.
      </p>
    </header>

    <div class="prose prose-primary dark:prose-invert max-w-none prose-lg leading-relaxed space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Waarom CodeBlog.nl?</h2>
        <p>
          Omdat goede technische content over het Microsoft-ecosysteem in onze eigen taal schaars is. Wij richten ons op de volledige stack: van robuuste backends in .NET tot schaalbare Azure-oplossingen en moderne frontends met VueJS.
        </p>
      </section>

      <section class="space-y-4">
        <p>
          We slaan de brug tussen theorie en de praktijk van alledag. Geen marketingpraat, maar eerlijke artikelen over best practices en software architectuur. Voor juniors, seniors en alles daartussenin.
        </p>
      </section>

      <section class="space-y-6 pt-8">
        <h2 class="text-2xl font-bold">Bouw mee aan de community</h2>
        <p>
          Heb je zelf een uitdagend probleem opgelost of wil je jouw expertise delen? Dit platform is open-source. Je kunt je eigen artikelen direct insturen via een Pull Request op GitHub. Zo bouwen we samen aan een centrale kennisbank voor de Nederlandstalige developer.
        </p>
        <UButton
          to="https://github.com/LouellaCreemers/CodeblogNL"
          target="_blank"
          icon="i-simple-icons-github"
          color="gray"
          variant="ghost"
          label="Bekijk op GitHub"
          class="-ml-2.5"
        />
      </section>
    </div>

    <footer class="pt-8 flex gap-4 border-t border-gray-100 dark:border-gray-800">
      <UButton to="/blog" size="lg" label="Ontdek de blog" />
      <UButton to="/" variant="ghost" size="lg" label="Terug naar Home" />
    </footer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Over ons - CodeBlog.nl',
  description: 'Leer meer over de missie en visie van CodeBlog.nl, hét platform voor Nederlandstalige developers.'
})

defineOgImage({
  component: 'OgImageGeneral',
  title: 'Over CodeBlog.nl',
  description: 'Full-stack content, gewoon in het Nederlands.',
  alt: 'Over CodeBlog.nl - Social media afbeelding'
})
</script>
