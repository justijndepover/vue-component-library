<template>
    <div>
        <label v-if="label" :for="idComputed" class="block text-sm font-medium text-gray-700">{{ label }}</label>

        <div class="relative rounded-md shadow-sm" :class="label ? 'mt-1' : ''">
            <select
                :id="idComputed"
                :name="name"
                :readonly="readonly"
                :disabled="disabled"
                :value="value"
                @input="$emit('input', $event.target.value)"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                class="appearance-none bg-white border outline-none focus:ring-1 ring-offset-0 block w-full pl-3 pr-10 py-2 sm:text-sm text-base leading-normal rounded-md"
                :class="error ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 text-gray-800 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400'">
                <slot></slot>
            </select>

            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5" :class="error ? 'text-red-500' : 'text-gray-500'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>

        <p v-if="error.length" class="mt-2 text-sm text-red-600">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'x-select-native',
    props: {
        id: String,
        name: String,
        label: String,
        value: {
            type: [String, Number],
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        autocomplete: {
            required: false,
            type: String,
            default: '',
        },
        autofocus: {
            required: false,
            type: Boolean,
            default: false,
        },
        error: {
            required: false,
            type: [String, Boolean],
            default: false,
        },
    },
    computed: {
        idComputed() {
            return this.id || Math.random().toString(36).substring(2, 15);
        },
    },
}
</script>