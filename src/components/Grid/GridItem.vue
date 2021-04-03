<template>
    <div :class="'col-span-6 md:col-span-' + colspan">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x-grid-item',
    props: {
        colspan: {
            type: Number,
            default: 6,
        },
    },
    computed: {
        className() {
            if (this.colspan == 1) {
                return 'md:col-span-1';
            }
            if (this.colspan == 2) {
                return 'md:col-span-2';
            }
            if (this.colspan == 3) {
                return 'md:col-span-3';
            }
            if (this.colspan == 4) {
                return 'md:col-span-4';
            }
            if (this.colspan == 5) {
                return 'md:col-span-5';
            }
            return 'md:col-span-6';
        }
    }
}
</script>