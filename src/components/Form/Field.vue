<template>
    <div :class="'col-span-6 md:col-span-' + colspan">
        <label class="text-sm font-medium text-gray-600 leading-5 mb-1 block" :for="forValue">{{ name }}</label>
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
        for: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
            forValue: this.for,
        }
    },
    created() {
        if (this.forValue == '') {
            this.forValue = this.name.toLowerCase().replace(' ', '_');
        }
    }
}
</script>