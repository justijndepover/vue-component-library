<template>
    <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
        <a
            @click="$emit('change', page - 1)"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border cursor-pointer bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            :disabled="page == 1"
        >
            <span class="sr-only">Previous</span>

            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </a>

        <a
            v-for="pageId in totalPages"
            :key="pageId"
            @click="$emit('change', pageId)"
            class="relative inline-flex items-center px-4 py-2 border cursor-pointer text-sm font-medium text-gray-700 hover:bg-gray-50"
            :class="page == pageId ? 'bg-gray-100' : 'bg-white'"
        >
            {{ pageId }}
        </a>

        <a
            @click="$emit('change', page + 1)"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border cursor-pointer bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
            <span class="sr-only">Next</span>

            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </a>
    </nav>
</template>

<script>
export default {
    props: {
        page: {
            type: Number,
            default: 1,
        },
        totalPages: {
            type: Number,
            default: 1,
        }
    },
}
</script>
