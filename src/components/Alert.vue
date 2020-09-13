<template>
    <div v-if="show" class="bg-green-200 text-green-800 p-4 rounded-lg mb-2 flex items-center justify-between">
        <slot></slot>
        <div class="cursor-pointer" @click="hide">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    },
    methods: {
        hide() {
            this.show = false;
        },
    }
};
</script>