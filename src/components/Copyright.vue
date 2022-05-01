<template>
    <div class="px-4 py-5 border-2 border-opacity-30 leading-relaxed">
        <p><b>本文作者：</b>{{ author }}</p>
        <p><b>本文链接：</b><LinkTo class="text-gray-400 hover:text-gray-800 transition-all duration-300" :url="`/articles/${url}`">{{ config.siteurl }}/articles/{{ url }}</LinkTo></p>
        <p><b>文章使用 <LinkTo class="text-gray-400 hover:text-gray-800 transition-all duration-300" url="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</LinkTo> 协议进行许可，使用时请注意遵守协议。</b></p>
    </div>
</template>

<script>
import config from "@/config.yml";

export default {
    name: "Copyright",
    components: {},
    props: ["author", "url"],
    data() {
        return { config };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
