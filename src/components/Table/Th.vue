<template>
    <th
        scope="col"
        class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        :class="fit ? 'px-1 w-1' : 'px-6'">
        <slot></slot>
    </th>
</template>

<script>
export default {
    name: 'x-th',
    props: {
        fit: {
            type: Boolean,
            default: false,
        }
    },
}
</script>