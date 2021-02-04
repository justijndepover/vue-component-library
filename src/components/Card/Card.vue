<template>
    <div class="bg-white overflow-hidden shadow rounded-lg mb-4">
        <x-card-header v-if="title">
            <h2 class="font-semibold text-gray-700 tracking-wide">{{ title }}</h2>
        </x-card-header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x-card',
    props: {
        title: {
            type: String,
            default: '',
            required: false,
        },
    }
}
</script>