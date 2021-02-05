<template>
    <div>
        <label v-if="label" :for="idComputed" class="block text-sm font-medium text-gray-700">{{ label }}</label>

        <div class="relative rounded-md shadow-sm" :class="label ? 'mt-1' : ''">
            <input
                :type="type"
                :id="idComputed"
                :name="name"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :value="value"
                @input="$emit('input', $event.target.value)"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                class="appearance-none bg-white border outline-none focus:ring-1 ring-offset-0 block w-full pl-3 py-2 sm:text-sm text-base leading-normal rounded-md"
                :class="error ? 'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'pr-10 border-gray-300 text-gray-800 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400'">

            <div v-if="error" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-red-500" x-description="Heroicon name: exclamation-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
            </div>
            <div v-if="!error" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>

        <p v-if="Array.isArray(error) && error.length" class="mt-2 text-sm text-red-600">{{ error[0] }}</p>
        <p v-else-if="error.length" class="mt-2 text-sm text-red-600">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'x-date',
    props: {
        id: String,
        name: String,
        label: String,
        placeholder: String,
        value: {
            type: [String, Number],
            default: '',
        },
        type: {
            type: String,
            default: 'text',
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
            type: [Array, String, Boolean],
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