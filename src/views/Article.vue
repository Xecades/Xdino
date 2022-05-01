<template>
    <div v-if="meta && url != undefined">
        <!-- 标题 -->
        <div class="w-full px-12 text-center text-3xl mt-28 mb-4 inline-block leading-10">
            {{ meta.title }}
        </div>

        <!-- 元信息 -->
        <div class="w-full text-center text-sm mb-10 text-gray-400 inline-block">
            <span :title="dayjs(meta.date).format('YYYY-MM-DD HH:mm:ss')">
                {{ dayjs(meta.date).format("YYYY-MM-DD") }}
            </span>
            <span v-if="meta.category">&dot;</span>
            <LinkTo class="hover:text-gray-600 duration-500 transition-all" :url="`/categories/${meta.category}`" v-if="meta.category">
                {{ meta.category }}
            </LinkTo>
        </div>

        <!-- 内容 -->
        <div class="w-full shadow-lg rounded-lg bg-white">
            <div
                class="w-full h-60 bg-no-repeat bg-cover bg-center block -mb-4"
                v-if="thumbnail"
                :style="`background-image: url(${thumbnail})`"
            />
            <div class="markdown w-full px-10 pt-10 pb-10">
                <component :is="`content-${$[url]}`" />
            </div>

            <!-- 版权信息 -->
            <div class="pb-10 copyright">
                <Copyright
                    class="mx-10"
                    :author="meta.author ?? config.author"
                    :url="url"
                    v-if="!(meta.copyright == false)"
                />
            </div>
        </div>

        <!-- 上下页 -->
        <div class="px-4 py-10 select-none">
            <Paginator
                :prev="`/articles/${$[+$[url] - 1]?.url}`"
                :next="`/articles/${$[+$[url] + 1]?.url}`"
                :prevCond="$[+$[url] - 1]"
                :nextCond="$[+$[url] + 1]"
                :prevText="$[+$[url] - 1]?.title"
                :nextText="$[+$[url] + 1]?.title"
            />
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
import dayjs from "dayjs";
import Copyright from "../components/Copyright.vue";
import Paginator from "../components/Paginator.vue";

export default {
    name: "Article",
    components: { Copyright, Paginator },
    props: [],
    data() {
        return { config, dayjs, $, url: null, meta: null, thumbnail: null };
    },
    mounted() {
        const url = this.$root.$route.path.match(/([^/]+)$/)[0];
        const index = $[url];
        const meta = $[index];

        this.url = url;
        this.meta = meta;

        if (meta.thumbnail) {
            this.thumbnail = require(`@/source/thumbnail/${meta.thumbnail}`);
        }
    },
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
