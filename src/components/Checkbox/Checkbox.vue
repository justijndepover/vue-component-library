<template>
    <div>
        <div class="flex items-center">
            <input
                type="checkbox"
                :id="idComputed"
                :name="name"
                :disabled="disabled"
                :required="required"
                :indeterminate.prop="indeterminate"
                :value="nativeValue"
                v-model="checked"
                @change="onChange"
                class="appearance-none p-0 inline-block align-middle h-4 w-4 rounded select-none flex-shrink-0 outline-none focus:ring-1 ring-offset-0 focus:ring-blue-400 bg-center bg-no-repeat"
                :class="active ? 'bg-blue-500' : 'bg-white border border-gray-300 focus:border-blue-400'"
                style="background-image: url('data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e')"
            />
            <label v-if="label" :for="idComputed" class="block text-sm font-medium text-gray-700 pl-2">{{ label }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'x-checkbox',
    props: {
        id: String,
        name: String,
        label: String,
        value: {
            type: [String, Number, Boolean, Function, Object, Array, Symbol],
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            active: false,
        }
    },
    methods: {
        onChange() {
            this.$emit('input', this.active)
        }
    },
    computed: {
        idComputed() {
            return this.id || Math.random().toString(36).substring(2, 15);
        },
        checked: {
            get() {
                return this.value
            },
            set(value) {
                this.active = value
            }
        },
    },
}
</script>