<template>
    <button
        @click="onClick($event)"
        class="inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none"
        :class="[ colors[appearance][color], sizes[size] ]"
        :type="type"
        :disabled="disabled"
    >
        <x-icon v-if="icon && !iconRight && iconIf" :icon="icon" :class="this.$slots.default ? 'mr-2' : ''" :spin="iconSpin"></x-icon>
        <span>
            <slot></slot>
        </span>
        <x-icon v-if="icon && iconRight && iconIf" :icon="icon" :class="this.$slots.default ? 'ml-2' : ''" :spin="iconSpin"></x-icon>
    </button>
</template>

<script>
export default {
    name: 'x-button',
    data() {
        return {
            colors: {
                normal: {
                    default: 'text-white bg-red-500 hover:bg-red-600 active:bg-red-600 focus:border-red-300 focus:ring-red-300',
                    gray: 'text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-600 focus:border-gray-300 focus:ring-gray-300',
                    red: 'text-white bg-red-500 hover:bg-red-600 active:bg-red-600 focus:border-red-300 focus:ring-red-300',
                    yellow: 'text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 focus:border-yellow-300 focus:ring-yellow-300',
                    green: 'text-white bg-green-500 hover:bg-green-600 active:bg-green-600 focus:border-green-300 focus:ring-green-300',
                    blue: 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-600 focus:border-blue-300 focus:ring-blue-300',
                    indigo: 'text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 focus:border-indigo-300 focus:ring-indigo-300',
                    purple: 'text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-600 focus:border-purple-300 focus:ring-purple-300',
                    pink: 'text-white bg-pink-500 hover:bg-pink-600 active:bg-pink-600 focus:border-pink-300 focus:ring-pink-300',
                    transparent: 'text-gray-500 hover:bg-gray-200 active:bg-gray-200 focus:border-gray-300 focus:ring-gray-300',
                },
                flat: {
                    default: 'text-red-700 bg-red-100 hover:bg-red-50 active:bg-red-50 hover:text-red-600 active:text-red-600 focus:border-red-300 focus:ring-red-100',
                    gray: 'text-gray-700 bg-gray-100 hover:bg-gray-50 active:bg-gray-50 hover:text-gray-600 active:text-gray-600 focus:border-gray-300 focus:ring-gray-100',
                    red: 'text-red-700 bg-red-100 hover:bg-red-50 active:bg-red-50 hover:text-red-600 active:text-red-600 focus:border-red-300 focus:ring-red-100',
                    yellow: 'text-yellow-700 bg-yellow-100 hover:bg-yellow-50 active:bg-yellow-50 hover:text-yellow-600 active:text-yellow-600 focus:border-yellow-300 focus:ring-yellow-100',
                    green: 'text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100',
                    blue: 'text-blue-700 bg-blue-100 hover:bg-blue-50 active:bg-blue-50 hover:text-blue-600 active:text-blue-600 focus:border-blue-300 focus:ring-blue-100',
                    indigo: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-50 active:bg-indigo-50 hover:text-indigo-600 active:text-indigo-600 focus:border-indigo-300 focus:ring-indigo-100',
                    purple: 'text-purple-700 bg-purple-100 hover:bg-purple-50 active:bg-purple-50 hover:text-purple-600 active:text-purple-600 focus:border-purple-300 focus:ring-purple-100',
                    pink: 'text-pink-700 bg-pink-100 hover:bg-pink-50 active:bg-pink-50 hover:text-pink-600 active:text-pink-600 focus:border-pink-300 focus:ring-pink-100',
                    transparent: 'text-gray-500 hover:bg-gray-200 active:bg-gray-200 focus:border-gray-300 focus:ring-gray-100',
                },
                outline: {
                    default: 'text-red-700 bg-white border-red-300 hover:text-red-600 active:text-red-600 hover:bg-red-100 active:bg-red-100 focus:ring-red-100 focus:bg-red-50',
                    gray: 'text-gray-700 bg-white border-gray-300 hover:text-gray-600 active:text-gray-600 hover:bg-gray-100 active:bg-gray-100 focus:ring-gray-100 focus:bg-gray-50',
                    red: 'text-red-700 bg-white border-red-300 hover:text-red-600 active:text-red-600 hover:bg-red-100 active:bg-red-100 focus:ring-red-100 focus:bg-red-50',
                    yellow: 'text-yellow-700 bg-white border-yellow-300 hover:text-yellow-600 active:text-yellow-600 hover:bg-yellow-100 active:bg-yellow-100 focus:ring-yellow-100 focus:bg-yellow-50',
                    green: 'text-green-700 bg-white border-green-300 hover:text-green-600 active:text-green-600 hover:bg-green-100 active:bg-green-100 focus:ring-green-100 focus:bg-green-50',
                    blue: 'text-blue-700 bg-white border-blue-300 hover:text-blue-600 active:text-blue-600 hover:bg-blue-100 active:bg-blue-100 focus:ring-blue-100 focus:bg-blue-50',
                    indigo: 'text-indigo-700 bg-white border-indigo-300 hover:text-indigo-600 active:text-indigo-600 hover:bg-indigo-100 active:bg-indigo-100 focus:ring-indigo-100 focus:bg-indigo-50',
                    purple: 'text-purple-700 bg-white border-purple-300 hover:text-purple-600 active:text-purple-600 hover:bg-purple-100 active:bg-purple-100 focus:ring-purple-100 focus:bg-purple-50',
                    pink: 'text-pink-700 bg-white border-pink-300 hover:text-pink-600 active:text-pink-600 hover:bg-pink-100 active:bg-pink-100 focus:ring-pink-100 focus:bg-pink-50',
                    transparent: 'text-gray-500 hover:bg-gray-200 active:bg-gray-200 focus:border-gray-300 focus:ring-gray-100',
                }
            },
            sizes: {
                sm: 'py-1 px-2 text-xs',
                xs: 'py-1 px-1 text-xs',
                md: 'py-1 px-3 text-sm',
                lg: 'py-2 px-4',
            },
        };
    },
    props: {
        type: {
            required: false,
            type: String,
            default: 'button',
        },
        to: {
            required: false,
            type: [String, Object],
        },
        href: {
            required: false,
            type: String,
        },
        color: {
            required: false,
            type: String,
            default: 'default',
        },
        size: {
            required: false,
            type: String,
            default: 'md',
        },
        appearance: {
            required: false,
            type: String,
            default: 'normal',
        },
        disabled: {
            required: false,
            type: Boolean,
            default: false,
        },
        icon: {
            required: false,
            type: String,
            default: '',
        },
        iconRight: {
            required: false,
            type: Boolean,
            default: false,
        },
        iconSpin: {
            required: false,
            type: Boolean,
            default: false,
        },
        iconIf: {
            required: false,
            type: Boolean,
            default: true,
        },
    },
    methods: {
        onClick(event) {
            if (typeof this.to === 'undefined' && typeof this.href !== 'undefined') { // is href
                event.preventDefault()
                window.location = this.href
            } else if (typeof this.to !== 'undefined' && typeof this.$router !== 'undefined') { // is router-link
                if (typeof this.to !== 'object' && this.to !== null) { // is string
                    this.$router.push({ name: this.to }).catch(() => {})
                } else { // is object
                    this.$router.push(this.to).catch(() => {})
                }
            }
            this.$emit('click', event)
        }
    }
}
</script>