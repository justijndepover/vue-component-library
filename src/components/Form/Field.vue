<template>
    <div :class="'col-span-6 md:col-span-' + colspan">
        <label class="text-sm font-medium text-gray-600 leading-5 mb-1 block" :for="id">{{ name }}</label>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        colspan: {
            type: Number,
            default: 6,
        },
        name: {
            type: String,
        },
        id: {
            type: String,
            default: '',
        }
    },
    created() {
        if (this.id == '') {
            this.id = this.name.toLowerCase().replace(' ', '_');
        }
    }
}
</script>