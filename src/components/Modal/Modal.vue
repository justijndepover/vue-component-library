<template>
    <div v-if="show" class="absolute inset-0">
        <div class="w-full h-full flex items-start justify-center p-3 sm:items-center">
            <div v-show="show" class="shadow-sm border rounded-lg overflow-hidden w-full max-w-md z-40">
                <div class="bg-white p-4 relative">
                    <div class="absolute top-0 right-0 p-3 cursor-pointer" @click="hideModal">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <h2 v-if="title" class="font-semibold text-gray-700 tracking-wide mb-2">{{ title }}</h2>

                    <span v-if="body" class="text-sm text-gray-500">{{ body }}</span>
                    <slot></slot>
                </div>

                <div class="bg-gray-100 p-4 flex items-center justify-end">
                    <button v-if="dismiss" class="btn-transparent mr-4" @click="hideModal">{{ dismiss }}</button>
                    <button class="btn-primary" @click="confirmModal">{{ confirm }}</button>
                </div>
            </div>
        </div>

        <div class="bg-black opacity-25 inset-0 fixed z-30"></div>
    </div>
</template>

<script>
export default {
    name: 'o-modal',
    props: {
        dismiss: {
            type: String,
        },
        confirm: {
            type: String,
        },
        title: {
            type: String,
        },
        body: {
            type: String,
        }
    },
    data () {
        return {
            show: true,
        }
    },
    created() {

    },
    methods: {
        hideModal() {
            this.show = false;
            this.$emit('cancel');
        },
        confirmModal() {
            this.show = false;
            this.$emit('confirm');
        },
    }
}
</script>
