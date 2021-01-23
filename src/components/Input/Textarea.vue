<template>
    <div>
        <label v-if="label" :for="idComputed" class="block text-sm font-medium text-gray-700">{{ label }}</label>

        <div class="relative rounded-md shadow-sm" :class="label ? 'mt-1' : ''">
            <textarea
                :id="idComputed"
                :name="name"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :value="value"
                @input="$emit('input', $event.target.value)"
                :autofocus="autofocus"
                :rows="rows"
                :cols="cols"
                class="appearance-none bg-white border outline-none focus:ring-1 ring-offset-0 block w-full pl-3 py-2 sm:text-sm text-base leading-normal rounded-md"
                :class="error ? 'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'pr-3 border-gray-300 text-gray-800 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400'"></textarea>
        </div>

        <p v-if="error.length" class="mt-2 text-sm text-red-600">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'x-textarea',
    props: {
        id: String,
        name: String,
        label: String,
        placeholder: String,
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
        autofocus: {
            required: false,
            type: Boolean,
            default: false,
        },
        rows: {
            required: false,
            type: [String, Number],
            default: 10,
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