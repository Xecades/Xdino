<template>
    <div class="group shadow-lg hover:shadow-xl hover:-translate-y-1.5 duration-500 ease-in-out transform transition-all mb-10 bg-white rounded-lg overflow-hidden">

        <!-- 页首图 -->
        <div
            class="w-full h-60 bg-no-repeat bg-cover bg-center block cursor"
            v-if="meta?.thumbnail"
            :style="`background-image: url(${thumbnail})`"
            @click="jump()"
        />

        <div class="my-10 px-10 block z-20">
            <!-- 标题 -->
            <LinkTo :url="meta.link || `/articles/${meta.url}`" class="text-gray-500 inline-block text-2xl font-bold mb-5 group-hover:text-gray-700 duration-500 transition-all leading-10" v-if="meta">
                {{ meta.title }}
            </LinkTo>

            <!-- 摘要 -->
            <div class="markdown">
                <component :is="`excerpt-${index}`" />
            </div>

            <!-- 元信息 -->
            <div v-if="meta" class="select-none mt-5 text-sm inline-block text-right w-full text-gray-400">
                <!-- 日期 -->
                {{ dayjs(meta.date).format("YYYY-MM-DD") }}
                <span v-if="meta.category">&dot; </span>
                <LinkTo :url="`/categories/${meta.category}`" v-if="meta.category" class="hover:text-gray-700 duration-300 transition-all">
                    {{ meta.category }}
                </LinkTo>
            </div>

            <!-- 链接文章图标 -->
            <fas
                class="fas absolute opacity-5 text-gray-500 right-4 bottom-4"
                icon="paperclip"
                v-if="meta?.link && !meta?.pin"
            />

            <!-- 置顶文章图标 -->
            <fas
                class="rotate-45 transform fas absolute opacity-5 text-gray-500 right-10 bottom-4"
                icon="thumbtack"
                v-if="meta?.pin"
            />
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
import dayjs from "dayjs";

export default {
    name: "Post",
    components: {},
    props: ["index"],
    data() {
        return { config, dayjs, data: null, meta: null, thumbnail: null, url: null };
    },
    mounted() {
        const meta = $[this.index];
        const data = require(`@/posts/${meta.url}.md`);

        this.meta = meta;
        this.data = data;

        if (meta.thumbnail)
            this.thumbnail = require(`@/source/thumbnail/${meta.thumbnail}`);
    },
    methods: {
        jump() {
            if (this.meta.link)
                window.open(this.meta.link);
            else
                this.$router.push(`/articles/${this.meta.url}`);
        }
    },
};
</script>

<style scoped lang="stylus">
.fas
    font-size 11rem
    z-index -1
</style>
