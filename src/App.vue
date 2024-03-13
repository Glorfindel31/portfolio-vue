<script setup lang="ts">
import Aside from './components/navigation/Aside.vue';
</script>

<template>
    <div class="flex flex-col min-w-full min-h-screen md:flex-row">
        <Aside />
        <div class="min-w-full p-4">
            <router-view />
        </div>
    </div>
</template>
