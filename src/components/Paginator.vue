<template>
    <LinkTo
        v-if="prevCond" :url="prev"
        class="w-1/2 float-left text-left hover:text-gray-600 transition-all duration-500 relative"
    >
        <div class="text-gray-300 text-xl absolute -left-5 top-0 bottom-0">
            <fas icon="angle-left" class="align-middle h-12" />
        </div>
        <div class="text-gray-400 text-sm">{{ config.previous }}</div>
        <div class="text-gray-500 text-opacity-80 overflow-hidden whitespace-nowrap overflow-ellipsis font-bold">{{ prevText }}</div>
    </LinkTo>

    <LinkTo
        v-if="nextCond" :url="next"
        class="w-1/2 float-right text-right hover:text-gray-600 transition-all duration-500 relative"
    >
        <div class="text-gray-300 text-xl absolute -right-5 top-0 bottom-0">
            <fas icon="angle-right" class="align-middle h-12" />
        </div>
        <div class="text-gray-400 text-sm">{{ config.next }}</div>
        <div class="text-gray-500 text-opacity-80 overflow-hidden whitespace-nowrap overflow-ellipsis font-bold">{{ nextText }}</div>
    </LinkTo>
</template>

<script>
import config from "@/config.yml";

export default {
    name: "Paginator",
    components: {},
    props: ["prev", "next", "prevCond", "nextCond", "prevText", "nextText"],
    data() {
        return { config };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
