<template>
    <td class="py-3 whitespace-nowrap text-sm" :class="[highlight ? 'font-medium text-gray-900' : 'text-gray-500', fit ? 'px-1 whitespace-nowrap' : 'px-6']">
        <slot></slot>
    </td>
</template>

<script>
export default {
    name: 'x-td',
    props: {
        highlight: {
            type: Boolean,
            default: false,
        },
        fit: {
            type: Boolean,
            default: false,
        },
    },
}
</script>