<template>
    <div class="flex-1 flex overflow-hidden">
        <div class="p-3 flex-1 overflow-y-auto">
            <slot v-if="!loading"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        loading: {
            default: false,
        }
    },
}
</script>
