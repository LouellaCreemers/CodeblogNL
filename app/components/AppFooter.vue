<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/50 py-12 mt-auto">
    <UContainer>
      <div class="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {{ new Date().getFullYear() }} CodeBlog.nl. Alle rechten voorbehouden.</p>
        <div class="flex gap-6">
          <a href="https://github.com/LouellaCreemers/CodeblogNL" target="_blank" rel="noopener noreferrer" class="hover:text-primary-500 transition-colors" aria-label="GitHub">
            GitHub
          </a>
          <a href="/rss.xml" class="hover:text-primary-500 transition-colors">RSS</a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
