<template>
  <div id="app" class="flex h-screen w-full flex-row">
    <nav class="block fixed z-10 b-0 bg-blue-500 inset-x-0">
      <div class="hidden">
        <router-link to="/header" class="bg-gray-400">header</router-link>
      </div>
      <router-link to="/nav">nav</router-link>
      <router-link to="/home">home</router-link>
    </nav>
    <div class="block">
      <router-view />
    </div>
  </div>
</template>

<style src="./assets/tailwind.css" />
