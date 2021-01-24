<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="classComputed" v-html="paths"></svg>
</template>

<script>
import heroicons from './Iconpacks/heroicons';

export default {
    name: 'x-icon',
    props: {
        icon: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            required: false,
        },
        size: {
            type: [String, Number],
            default: 4,
            required: false,
        },
        spin: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    computed: {
        paths() {
            return heroicons[this.icon];
        },
        classComputed() {
            var className = this.className;
            className += ` w-${this.size} h-${this.size}`;

            if (this.spin) {
                className += ' animate-spin';
            }

            return className;
        },
    }
}
</script>