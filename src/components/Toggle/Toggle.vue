<template>
    <div class="cursor-pointer inline-block" @click="toggle">
        <div class="relative">
            <div class="w-12 h-6 rounded-full transition duration-300" :class="checked ? 'bg-green-300' : 'bg-gray-100'"></div>

            <div class="absolute inset-0">
                <div class="absolute w-6 h-6 inset-0 transition duration-300 transform" style="padding: 0.125rem" :class="checked ? 'translate-x-full' : 'translate-x-0'">
                    <div class="w-full h-full bg-gray-200 border rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'o-toggle',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            checked: this.value,
        }
    },
    methods: {
        toggle() {
            this.checked = !this.checked;
            this.$emit('input', this.checked);
        }
    }
}
</script>
