<template>
    <div>
        <label v-if="label" :for="idComputed" class="block text-sm font-medium text-gray-700">{{ label }}</label>

        <div class="relative" :class="label ? 'mt-1' : ''">
            <button
                :id="idComputed"
                type="button"
                ref="button"
                @keydown.down="onButtonClick"
                @keydown.up="onButtonClick"
                @click="onButtonClick"
                v-click-outside="onClickOutside"
                aria-haspopup="listbox"
                :aria-expanded="open"
                aria-labelledby="listbox-label"
                :autofocus="autofocus"
                class="relative appearance-none bg-white border outline-none focus:outline-none focus:ring-1 ring-offset-0 block w-full pl-3 pr-10 py-2 sm:text-sm text-base leading-normal rounded-md shadow-sm text-left cursor-default"
                :class="error ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 text-gray-800 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400'">
                <div class="flex items-center" v-html="getContentValue"></div>

                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none z-50">
                    <x-icon icon="chevron-down" size="5" :class="error ? 'text-red-500' : 'text-gray-500'" />
                </div>
            </button>

            <transition
                enter-active-class="transition ease-out duration-100"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-100"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
            >
                <div
                    v-show="open"
                    class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
                >
                    <ul
                        @keydown.enter.stop.prevent="onOptionSelect"
                        @keydown.space.stop.prevent="onOptionSelect"
                        @keydown.escape="onEscape"
                        @keydown.up.prevent="onArrowUp"
                        @keydown.down.prevent="onArrowDown"
                        ref="listbox"
                        tabindex="-1"
                        role="listbox"
                        aria-labelledby="listbox-label"
                        :aria-activedescendant="activeDescendant"
                        class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                        <slot></slot>
                    </ul>
                </div>
            </transition>
        </div>

        <p v-if="Array.isArray(error) && error.length" class="mt-2 text-sm text-red-600">{{ error[0] }}</p>
        <p v-else-if="error.length" class="mt-2 text-sm text-red-600">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'x-select',
    props: {
        id: String,
        label: String,
        value: {
            type: [String, Number],
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
    data() {
        return {
            activeDescendant: null,
            optionCount: null,
            open: false,
            selected: null,
            options: [],
        };
    },
    mounted() {
        this.optionCount = this.$refs.listbox.children.length;
        this.options = Array.from(this.$refs.listbox.children).map((child) => {
            return child.getAttribute('name');
        });
    },
    methods: {
        reload() {
            this.optionCount = this.$refs.listbox.children.length;
            this.options = Array.from(this.$refs.listbox.children).map((child) => {
                return child.getAttribute('name');
            });
        },
        choose(option) {
            this.open = false;
            this.$emit('input', option);
        },
        select(value) {
            this.selected = this.options.indexOf(value);
        },
        onButtonClick() {
            if (this.open) {
                this.open = false;
                return;
            }

            this.selected = this.options.indexOf(this.value);
            this.open = true;

            this.$nextTick(() => {
                this.$refs.listbox.focus();
                if (this.$refs.listbox.children[this.selected]) {
                    this.$refs.listbox.children[this.selected].scrollIntoView({ block: 'nearest' });
                }
            })
        },
        onOptionSelect() {
            this.$emit('input', this.options[this.selected]);
            this.open = false;
            this.$refs.button.focus();
        },
        onClickOutside() {
            this.open = false;
        },
        onEscape() {
            this.open = false;
            this.$refs.button.focus();
        },
        onArrowUp() {
            this.selected = this.selected - 1 < 0 ? this.optionCount - 1 : this.selected - 1;
            this.$refs.listbox.children[this.selected].scrollIntoView({ block: 'nearest' });
        },
        onArrowDown() {
            this.selected = this.selected + 1 > this.optionCount - 1 ? 1 : this.selected + 1;
            this.$refs.listbox.children[this.selected].scrollIntoView({ block: 'nearest' });
        },
    },
    watch: {
        selected() {
            if (!this.open) return;

            if (this.selected === null) {
                this.activeDescendant = '';
                return;
            }

            if (this.$refs.listbox.children[this.selected]) {
                this.activeDescendant = this.$refs.listbox.children[this.selected].id;
            }
        }
    },
    computed: {
        idComputed() {
            return this.id || Math.random().toString(36).substring(2, 15);
        },
        selectedValue() {
            return this.options[this.selected];
        },
        getContentValue() {
            const selected = this.options.indexOf(this.value);

            try {
                return this.$refs.listbox.children[selected].children[0].innerHTML
            } catch (error) {
                //
            }

            try {
                return this.$refs.listbox.children[0].children[0].innerHTML
            } catch (error) {
                //
            }

            return '';
        },
    },
}
</script>