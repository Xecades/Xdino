<template>
    <LinkTo :url="`/categories/${name}`" class="select-none relative shadow-lg hover:shadow-xl hover:-translate-y-1.5 duration-500 ease-in-out transform transition-all mb-10 bg-white rounded-lg overflow-hidden py-10 px-10 block">

        <span class="table mx-auto text-gray-500 text-2xl font-bold hover:text-gray-700 duration-500 transition-all leading-10">
            {{ name }}
        </span>

        <fas
            class="text-9xl absolute opacity-5 right-2 top-2 z-10"
            icon="code-branch"
        />

    </LinkTo>
</template>

<script>
import config from "@/config.yml";

export default {
    name: "CategoryItem",
    components: {},
    props: ["name"],
    data() {
        return { config };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
