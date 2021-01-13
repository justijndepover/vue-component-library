<template>
    <div
        v-if="show"
        class="p-4 rounded mb-4 flex items-center justify-between"
        :class="[ themes[theme] ]"
        role="alert"
    >
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
    name: 'x-alert',
    props: {
        dismissable: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: 'success',
        },
    },
    data() {
        return {
            show: true,
            themes: {
                primary: 'bg-blue-200 text-blue-500',
                secondary: 'bg-gray-200 text-gray-500',
                info: 'bg-indigo-200 text-indigo-500',
                success: 'bg-green-200 text-green-500',
                warning: 'bg-yellow-200 text-yellow-600',
                danger: 'bg-red-200 text-red-500',
            },
        }
    },
    methods: {
        hide() {
            this.$emit('close');
            this.show = false;
        },
    },
    beforeDestroy() {
        this.$emit('destroy');
    },
};
</script>
