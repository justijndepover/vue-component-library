<template>
    <div class="flex-1 flex overflow-hidden">
        <div class="p-4 flex-1 overflow-y-auto">
            <slot v-if="!loading"></slot>
            <div v-if="loading" class="flex h-full items-center justify-center">
                <img src="/assets/loader.gif" alt="loading" class="w-64">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'o-page',
    props: {
        loading: {
            default: false,
        }
    },
}
</script>
