<template>
    <li
        :id="'listbox-item-' + value"
        role="option"
        :name="value"
        @click="$parent.choose(value)"
        @mouseenter="$parent.select(value)"
        @mouseleave="$parent.select(null)"
        :class="$parent.selectedValue === value ? 'text-white bg-blue-600' : 'text-gray-900'"
        class="cursor-default select-none relative py-2 pl-3 pr-9"
    >
        <div class="flex items-center">
            <slot></slot>
        </div>
    </li>
</template>

<script>
export default {
    name: "x-option",
    props: {
        value: {
            type: [String, Number, Boolean],
            required: false,
            default: null,
        },
    },
    mounted() {
        this.$parent.reload();
    },
};
</script>
