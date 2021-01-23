<template>
    <button
        type="button"
        @click="toggle"
        :aria-pressed="value"
        :class="checked ? 'bg-gray-200' : 'bg-blue-300'"
        class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" :class="{ 'translate-x-5': on, 'translate-x-0': !on }" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
    </button>
    <!-- <div class="cursor-pointer inline-block" @click="toggle">
        <div class="relative">
            <div class="w-12 h-6 rounded-full transition duration-300" :class="checked ? 'bg-green-300' : 'bg-gray-100'"></div>

            <div class="absolute inset-0">
                <div class="absolute w-6 h-6 inset-0 transition duration-300 transform" style="padding: 0.125rem" :class="checked ? 'translate-x-full' : 'translate-x-0'">
                    <div class="w-full h-full bg-gray-200 border rounded-full"></div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'x-toggle',
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
