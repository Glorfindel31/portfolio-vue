<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import menuItems from './index';
</script>

<template>
    <aside class="min-w-[300px] p-4 bg-slate-700">
        <ul class="flex flex-col gap-4 items-left">
            <li>
                <router-link
                    to="/"
                    class="scroll-m-20 text-3xl tracking-tight lg:text-4xl"
                    >Cedric <span class="font-extrabold">Florentin</span>
                </router-link>
            </li>
            <li v-for="(item, index) in menuItems" :key="index">
                <template v-if="item.type === 'toggle'">
                    <component :is="item.component" />
                </template>
                <template v-else-if="item.type === 'link'">
                    <Button
                        variant="ghost"
                        class="w-full items-start justify-start"
                        asChild>
                        <router-link :to="item.to || '/'">{{ item.text }}</router-link>
                    </Button>
                </template>
                <template v-else-if="item.type === 'external'">
                    <Button
                        variant="ghost"
                        class="w-full items-start justify-start"
                        asChild>
                        <a :href="item.href" target="_blank">{{ item.text }}</a>
                    </Button>
                </template>
            </li>
        </ul>
    </aside>
</template>
