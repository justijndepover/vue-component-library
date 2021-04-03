<template>
    <div class="grid gap-6 mb-6" :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x-grid',
    props: {
        colspan: {
            type: Number,
            default: 6,
        },
    },
    computed: {
        className() {
            if (this.colspan == 1) {
                return 'grid-cols-1';
            }
            if (this.colspan == 2) {
                return 'grid-cols-2';
            }
            if (this.colspan == 3) {
                return 'grid-cols-3';
            }
            if (this.colspan == 4) {
                return 'grid-cols-4';
            }
            if (this.colspan == 5) {
                return 'grid-cols-5';
            }
            if (this.colspan == 6) {
                return 'grid-cols-6';
            }
            return 'grid-cols-6';
        }
    }
}
</script>