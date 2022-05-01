<template>
    <span>
        <!-- <template v-if="type==`linkcard`">linkcard</template> -->

        {{ cmd }}
    </span>
</template>

<script>
import config from "@/config.yml";

export default {
    name: "MDsnippet",
    components: {},
    props: ["cmds"],
    data() {
        return {
            config,
            cmd: null,
            type: null,
        };
    },
    mounted() {
        console.log($)

        this.cmd = unescape(this.cmds);
        try {
            eval("this." + this.cmd);
        } catch (e) {}
    },
    methods: {
        linkcard(url, title) {
            this.type = "linkcard";
            console.log(url, title);
        },

        note(level, content) {
            this.type = "note";
            console.log(level, content);
        },

        quote(content) {
            this.type = "quote";
            console.log(content);
        },

        label(level, content) {
            this.type = "label";
            console.log(level, content);
        },

        spoiler(content) {
            this.type = "spoiler";
            console.log(content);
        }
    },
};
</script>

<style scoped lang="stylus"></style>
