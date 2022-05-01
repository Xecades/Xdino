<template>
    <div>
        <!-- 封面 -->
        <Cover :lineOne="config.cover.home.textLarge" :lineTwo="config.cover.home.description" />

        <!-- 页面 -->
        <template v-if="start != undefined && end != undefined">
            <Post v-for="index in (end - start + 1)" :key="index" :index="start + index - 1" />
        </template>

        <!-- 上下页 -->
        <div class="px-4 py-10 select-none" v-if="start != undefined && end != undefined">
            <Paginator
                :prev="prev()"
                :next="next()"
                :prevCond="start != 0"
                :nextCond="end != $.length - 1"
                :prevText="`第 ${page} 页`"
                :nextText="`第 ${page + 2} 页`"
            />
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
import Cover from "../components/Cover.vue";
import Post from "../components/Post.vue";
import Paginator from "../components/Paginator.vue";

export default {
    name: "Home",
    components: { Cover, Post, Paginator },
    props: [],
    data() {
        return { config, $, start: null, end: null, page: null };
    },
    mounted() {
        const url = this.$root.$route.path;

        let page = 1;
        if (url != "/")
            page = +url.match(/([^/]+)$/)[0];
        page--;

        let start = page * config.postsPerPage;
        let end = Math.min((page + 1) * config.postsPerPage - 1, $.length - 1)

        this.page = page;
        this.start = start;
        this.end = end;
    },
    methods: {
        prev() {
            let page = this.page;
            if (page == 1)  return "/";
            return `/page/${page}`;
        },
        
        next() {
            let page = this.page;
            return `/page/${page + 2}`;
        }
    },
};
</script>

<style scoped lang="stylus"></style>
