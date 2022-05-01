<template>
    <div>
        <Cover :lineOne="config.cover.category.textLarge" :lineTwo="config.cover.category.description" :child="url" />
        <div class="posts">
            <Post v-for="(i, index) in CATE[url]" :key="index" :index="i" />
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
import Cover from "../components/Cover.vue";
import Post from "../components/Post.vue";

export default {
    name: "Category",
    components: { Post, Cover },
    props: [],
    data() {
        return { CATE, config, url: null };
    },
    mounted() {
        const url = this.$root.$route.path.match(/([^/]+)$/)[0];
        this.url = decodeURI(url);
    },
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
