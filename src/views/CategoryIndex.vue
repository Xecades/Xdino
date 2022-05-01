<template>
    <div>
        <Cover :lineOne="config.cover.category.textLarge" :lineTwo="config.cover.category.description" />
        <div>
            <CategoryItem v-for="(item, name) in CATE" :key="name" :name="name" />
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
import Cover from "../components/Cover.vue";
import CategoryItem from "../components/CategoryItem.vue";

export default {
    name: "CategoryIndex",
    components: { Cover, CategoryItem },
    props: [],
    data() {
        return { config, CATE };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
