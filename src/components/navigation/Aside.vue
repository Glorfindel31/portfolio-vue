<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import menuItems from './index';
</script>

<template>
    <aside class="min-w-[30vw] p-4">
        <ul class="flex flex-col gap-4 items-center">
            <li>
                <router-link
                    to="/"
                    class="scroll-m-20 text-4xl tracking-tight lg:text-5xl"
                    >Cedric <span class="font-extrabold">Florentin</span>
                </router-link>
            </li>
            <li v-for="(item, index) in menuItems" :key="index">
                <template v-if="item.type === 'toggle'">
                    <component :is="item.component" />
                </template>
                <template v-else-if="item.type === 'link'">
                    <Button variant="ghost" asChild>
                        <router-link :to="item.to || '/'">{{ item.text }}</router-link>
                    </Button>
                </template>
                <template v-else-if="item.type === 'external'">
                    <Button variant="ghost" asChild>
                        <a :href="item.href" target="_blank">{{ item.text }}</a>
                    </Button>
                </template>
            </li>
        </ul>
    </aside>
</template>
