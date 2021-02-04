<template>
    <div
        v-if="show"
        class="p-4 rounded-md mb-4 flex items-center justify-between"
        :class="[ colors[color] ]"
        role="alert"
    >
        <div class="flex items-center justify-start">
            <x-icon v-if="icon" :icon="icon" size="5" :class="[ iconColors[color] ]" class="mr-4"></x-icon>
            <span>
                <slot></slot>
            </span>
        </div>
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
        color: {
            type: String,
            default: 'green',
        },
        icon: {
            required: false,
            type: String,
            default: '',
        },
    },
    data() {
        return {
            show: true,
            colors: {
                default: 'bg-green-50 text-green-700',
                gray: 'bg-gray-50 text-gray-700',
                red: 'bg-red-50 text-red-700',
                yellow: 'bg-yellow-50 text-yellow-700',
                green: 'bg-green-50 text-green-700',
                blue: 'bg-blue-50 text-blue-700',
                indigo: 'bg-indigo-50 text-indigo-700',
                purple: 'bg-purple-50 text-purple-700',
                pink: 'bg-pink-50 text-pink-700',
            },
            iconColors: {
                default: 'text-green-700',
                gray: 'text-gray-700',
                red: 'text-red-700',
                yellow: 'text-yellow-700',
                green: 'text-green-700',
                blue: 'text-blue-700',
                indigo: 'text-indigo-700',
                purple: 'text-purple-700',
                pink: 'text-pink-700',
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
