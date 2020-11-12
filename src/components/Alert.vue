<template>
    <div v-if="show" class="bg-green-200 text-green-500 text-sm p-4 rounded mb-2 flex items-center justify-between" role="alert">
        <slot></slot>
        <div v-if="dismissable" class="cursor-pointer" @click="hide">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dismissable: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: true,
        }
    },
    methods: {
        hide() {
            this.$emit('close');
            this.show = false;
        },
    }
};
</script>
