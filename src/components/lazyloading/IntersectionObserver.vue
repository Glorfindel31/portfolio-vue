<template>
    <img :src="src" :alt="alt" @load="onLoad" ref="imgRef" />
</template>

<script setup lang="ts">
import {defineProps, defineEmits, ref, onMounted, onBeforeUnmount} from 'vue';

defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['load']);

const loaded = ref(false);
let observer: IntersectionObserver | null = null;
let imgRef = ref(null); // Create a ref for the img element

const onIntersect = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loaded.value = true;
            observer.unobserve(entry.target);
        }
    });
};

const onLoad = () => {
    emit('load');
};

onMounted(() => {
    observer = new IntersectionObserver(onIntersect, {
        rootMargin: '0px',
        threshold: 0.1,
    });
    if (imgRef.value) {
        observer.observe(imgRef.value);
    }
});

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>
