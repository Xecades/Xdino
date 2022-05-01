<template>
    <div class="select-none w-full inline-block mt-28">
        <!-- 第一行字 -->
        <div class="text-5xl w-full text-gray-600">
            {{ lineOne }}
            <span v-if="child" class="jetbrains align-baseline">::</span>
            {{ child }}
        </div>

        <!-- 第二行字 -->
        <div class="mt-5 mb-20 w-full text-gray-500">
            {{ lineTwo || _lineTwo }}
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
const jinrishici = require("jinrishici");

export default {
    name: "Cover",
    components: {},
    props: ["lineOne", "lineTwo", "child"],
    data() {
        return { config, _lineTwo: config.cover.placeholder };
    },
    mounted() {
        if (!this.$props.lineTwo) {
            jinrishici.load(
                (result) => {
                    this._lineTwo = result.data.content;
                },
                () => {
                    this._lineTwo = config.cover.default;
                }
            );
        }
    },
    methods: {},
};
</script>

<style scoped lang="stylus">
.jetbrains
    font-family: font-code
</style>
