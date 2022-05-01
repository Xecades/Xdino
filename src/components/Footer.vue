<template>
    <div class="w-full mt-20 mb-10 select-none text-center text-gray-400 leading-7">

        <!-- 底部文字 -->
        <div>{{ config.footer.text }}</div>

        <!-- 版权信息 -->
        <div>
            <LinkTo url="/" class="cursor hover:text-gray-800 transition-all duration-500">{{ config.author }}</LinkTo> &copy;
            {{ config.copyright.start }} - {{ year }}
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
import dayjs from "dayjs";

export default {
    name: "Footer",
    components: {},
    props: [],
    data() {
        return {
            config,
            year: dayjs().year(),
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
