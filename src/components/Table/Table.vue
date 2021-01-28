<template>
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <slot></slot>
        </table>
    </div>
</template>

<script>
export default {
    name: 'x-table',
    props: {

    },
}
</script>