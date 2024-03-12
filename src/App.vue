<script setup lang="ts">
import DarkThemeToggle from '@/components/ui/darkTheme/DarkThemeToggle.vue';
import Button from '@/components/ui/button/Button.vue';
</script>

<template>
    <div class="flex flex-row min-w-full min-h-screen">
        <aside class="min-w-[30vw] p-4">
            <ul class="flex flex-col gap-4 items-center">
                <li>
                    <router-link to="/"
                        ><h1 class="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
                            Cedric <span class="font-extrabold">Florentin</span>
                        </h1></router-link
                    >
                </li>
                <li>
                    <DarkThemeToggle />
                </li>
                <li>
                    <Button variant="ghost" asChild>
                        <router-link to="/about">About</router-link>
                    </Button>
                </li>
            </ul>
        </aside>
        <div class="min-w-full p-4">
            <router-view />
        </div>
    </div>
</template>
