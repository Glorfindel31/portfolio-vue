<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import {Icon} from '@iconify/vue';
import menuItems from './index';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
</script>

<template>
    <nav class="min-w-full h-10 flex flex-row p-8 justify-between items-center">
        <router-link to="/" class="scroll-m-20 text-4xl tracking-tight lg:text-5xl"
            >Cedric <span class="font-extrabold">Florentin</span>
        </router-link>
        <Sheet>
            <SheetTrigger>
                <Icon icon="radix-icons:hamburger-menu" class="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                        <ul class="flex flex-col gap-4 items-center">
                            <li v-for="(item, index) in menuItems" :key="index">
                                <template v-if="item.type === 'toggle'">
                                    <component :is="item.component" />
                                </template>
                                <template v-else-if="item.type === 'link'">
                                    <Button variant="ghost" asChild>
                                        <router-link :to="item.to || '/'">{{
                                            item.text
                                        }}</router-link>
                                    </Button>
                                </template>
                                <template v-else-if="item.type === 'external'">
                                    <Button variant="ghost" asChild>
                                        <a :href="item.href" target="_blank">{{
                                            item.text
                                        }}</a>
                                    </Button>
                                </template>
                            </li>
                        </ul>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </nav>
</template>
