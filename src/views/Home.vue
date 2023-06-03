<script setup>
  import phantump from '@/assets/Phantump.png'
</script>

<template>
  <div class="flex flex-col gap-5">
    <img :src='phantump' class="h-42 w-42 self-center">
    <h1>VueMon</h1>
    <div class="flex self-center gap-5 h-10">
      <button class="w-36 bg-zinc-700 rounded-3xl">How to play</button>
      <button class="w-36 bg-white rounded-3xl text-black" @click="$router.push('play')">Play</button>
    </div>
    <h2>Inspired by <a target="_blank" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a></h2>
  </div>
</template>
