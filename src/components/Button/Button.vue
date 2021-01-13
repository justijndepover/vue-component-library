<template>
    <button
        @click="onClick($event)"
        class="inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none font-medium rounded-md transition duration-150 ease-in-out appearance-none"
        :class="[ themes[theme], sizes[size] ]"
        :type="type"
        :disabled="disabled"
    >
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'x-button',
    data() {
        return {
            themes: {
                default: 'text-white bg-red-600 hover:bg-red-700 active:bg-red-700 focus:border-red-700',
                primary: 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-600 focus:border-blue-600',
                secondary: 'text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-600 focus:border-gray-600',
                info: 'text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 focus:border-indigo-600',
                success: 'text-white bg-green-500 hover:bg-green-600 active:bg-green-600 focus:border-green-600',
                warning: 'text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 focus:border-yellow-600',
                danger: 'text-white bg-red-500 hover:bg-red-600 active:bg-red-600 focus:border-red-600',
                transparent: 'text-gray-500 hover:bg-gray-200 active:bg-gray-200 focus:border-gray-300',
            },
            sizes: {
                normal: 'py-1 px-3 text-sm',
                small: 'py-1 px-2 text-xs',
                large: 'py-2 px-4',
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
        theme: {
            required: false,
            type: String,
            default: 'default',
        },
        size: {
            required: false,
            type: String,
            default: 'normal',
        },
        disabled: {
            required: false,
            type: Boolean,
            default: false,
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