<script setup lang="ts">
import Aside from '@/components/navigation/Aside.vue';
import DropMenu from '@/components/navigation/DropMenu.vue';
</script>

<template>
    <div class="flex flex-col min-w-full min-h-screen md:flex-row">
        <Aside class="hidden md:block" />
        <DropMenu class="block md:hidden" />
        <div class="max-w-screen">
            <router-view />
        </div>
    </div>
</template>
