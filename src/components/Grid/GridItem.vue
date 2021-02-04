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
}
</script>