<template>
    <div class="grid gap-6 mb-6" :class="'grid-cols-' + colspan">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'o-form',
    props: {
        colspan: {
            type: Number,
            default: 6,
        },
    },
}
</script>