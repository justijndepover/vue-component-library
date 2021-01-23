<template>
    <div
        v-if="show"
        class="p-4 rounded-md mb-4 flex items-center justify-between"
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
                primary: 'bg-blue-100 text-blue-700',
                secondary: 'bg-gray-100 text-gray-700',
                info: 'bg-indigo-100 text-indigo-700',
                success: 'bg-green-100 text-green-700',
                warning: 'bg-yellow-100 text-yellow-700',
                danger: 'bg-red-100 text-red-700',
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
