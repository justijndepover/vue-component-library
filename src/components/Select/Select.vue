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
                aria-haspopup="listbox"
                :aria-expanded="open"
                aria-labelledby="listbox-label"
                :autofocus="autofocus"
                class="relative appearance-none bg-white border outline-none focus:outline-none focus:ring-1 ring-offset-0 block w-full pl-3 pr-10 py-2 sm:text-sm text-base leading-normal rounded-md shadow-sm text-left cursor-default"
                :class="error ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 text-gray-800 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400'">
                <span class="flex items-center">
                    <span class="block truncate">Claudie Smitham</span>
                </span>

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
                        <li
                            id="listbox-item-0"
                            role="option"
                            @click="choose(0)"
                            @mouseenter="selected = 0"
                            @mouseleave="selected = null"
                            :class="selected === 0 ? 'text-white bg-blue-600' : 'text-gray-900'"
                            class="cursor-default select-none relative py-2 pl-3 pr-9"
                        >
                            <div class="flex items-center">
                                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
                                <span
                                    :class="value === 0 ? 'font-semibold' : 'font-normal'"
                                    class="ml-3 block truncate font-normal"
                                >
                                    Wade Cooper
                                </span>
                            </div>
                        </li>

                        <li
                            id="listbox-item-1"
                            role="option"
                            @click="choose(1)"
                            @mouseenter="selected = 1"
                            @mouseleave="selected = null"
                            :class="selected === 1 ? 'text-white bg-blue-600' : 'text-gray-900'"
                            class="cursor-default select-none relative py-2 pl-3 pr-9"
                        >
                            <div class="flex items-center">
                                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
                                <span
                                    :class="value === 1 ? 'font-semibold' : 'font-normal'"
                                    class="ml-3 block truncate font-normal"
                                >
                                    Wade Cooper 2
                                </span>
                            </div>
                        </li>
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
            value: 0,
        };
    },
    mounted() {
        this.optionCount = 2;
        // this.optionCount = this.$refs.listbox.children.length;
    },
    methods: {
        choose(option) {
            this.value = option;
            this.open = false;
        },
        onButtonClick() {
            if (this.open) {
                this.open = false;
                return;
            }

            this.selected = this.value;
            this.open = true;

            this.$nextTick(() => {
                this.$refs.listbox.focus();
                this.$refs.listbox.children[this.selected].scrollIntoView({ block: 'nearest' });
            })
        },
        onOptionSelect() {
            if (this.selected !== null) {
                this.value = this.selected;
            }
            this.open = false;
            this.$refs.button.focus();
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

            this.activeDescendant = this.$refs.listbox.children[this.selected].id;
        }
    },
    computed: {
        idComputed() {
            return this.id || Math.random().toString(36).substring(2, 15);
        },
    },
}
</script>