<template>
    <div v-if="show" class="p-4 rounded mb-4 flex items-center justify-between" :class="className" role="alert">
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
    name: 'o-alert',
    props: {
        dismissable: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'success',
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
    },
    computed: {
        className() {
            if (this.type == 'danger') {
                return 'bg-red-200 text-red-500';
            }

            if (this.type == 'warning') {
                return 'bg-yellow-200 text-yellow-600';
            }

            if (this.type == 'info') {
                return 'bg-blue-200 text-blue-500';
            }

            return 'bg-green-200 text-green-500';
        }
    },
    beforeDestroy() {
        this.$emit('destroy');
    },
};
</script>
