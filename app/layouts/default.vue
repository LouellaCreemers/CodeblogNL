<template>
  <div class="flex flex-col min-h-screen">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-primary-600 text-white px-4 py-2 rounded-md shadow-lg"
    >
      Skip naar hoofdinhoud
    </a>
    <AppHeader />
    <main id="main" class="flex-grow py-8 outline-none" tabindex="-1">
      <UContainer>
        <slot />
      </UContainer>
    </main>
    <AppFooter />
  </div>
</template>
