<template>
  <div id="app" class="flex h-screen w-full flex-row">
    <nav class="block fixed z-10 top-0 border-b inset-x-0 uppercase px-10 py-3">
      <div class="hidden">
        <router-link to="/header" class="bg-gray-400">header</router-link>
      </div>
      <router-link to="/nav" class="text-lg">nav</router-link>
      <router-link to="/" class="text-lg mx-10">home</router-link>
      <router-link to="/slider" class="text-lg mr-10">slider</router-link>
      <router-link to="/chart" class="text-lg mr-10">chart</router-link>
      <router-link to="/crud" class="text-lg mr-10">crud</router-link>
      <router-link to="/detail" class="text-lg mr-10">detail</router-link>
      <router-link to="/black" class="text-lg">black</router-link>
    </nav>
    <div class="flex justify-center mt-16">
      <router-view class="min-w-400 max-w-1190" />
    </div>
  </div>
</template>

<style src="./assets/tailwind.css" />
