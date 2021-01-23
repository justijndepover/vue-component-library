<template>
    <div>
        <label v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</label>

        <div :class="label ? 'mt-1' : ''">
            <button
                type="button"
                @click="toggle"
                :aria-pressed="value"
                :class="checked ? 'bg-blue-300' : 'bg-gray-200'"
                class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Use setting</span>
                <span aria-hidden="true" :class="checked ? 'translate-x-5' : 'translate-x-0'" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'x-toggle',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        label: {
            required: false,
            type: String,
            default: '',
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
