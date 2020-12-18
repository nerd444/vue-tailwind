<template>
  <div id="app">
    <div id="nav" class="px-10 py-3 uppercase border-b">
      <div class="hidden">
        <router-link to="/header" class="bg-gray-400">header</router-link>
      </div>
      <router-link to="/nav" class="text-lg">nav</router-link>
      <router-link to="/" class="mx-10 text-lg">home</router-link>
      <router-link to="/slider" class="mr-10 text-lg">slider</router-link>
      <router-link to="/chart" class="mr-10 text-lg">chart</router-link>
      <router-link to="/crud" class="mr-10 text-lg">crud</router-link>
      <router-link to="/detail" class="mr-10 text-lg">detail</router-link>
      <router-link to="/black" class="text-lg">black</router-link>
    </div>
    <div class="flex justify-center">
      <router-view class="min-w-400 max-w-1190" />
    </div>
  </div>
</template>

<style src="./assets/tailwind.css" />
