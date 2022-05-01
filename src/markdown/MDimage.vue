<template>
    <img class="cursor" :src="url" :alt="caption" :title="caption" />
    <div class="caption">
        <span>{{ caption }}</span>
    </div>
</template>

<script>
import config from "@/config.yml";
import mediumZoom from "medium-zoom";

export default {
    name: "MDimage",
    components: {},
    props: ["url", "caption"],
    data() {
        return {
            config,
        };
    },
    mounted() {
        mediumZoom("img", { background: "unset" });
    },
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
