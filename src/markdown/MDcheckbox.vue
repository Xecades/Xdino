<template>
    <span class="checkbox">
        <template v-if="checked == 'true'">✔</template>
        <template v-else>✘</template>
    </span>
</template>

<script>
import config from "@/config.yml";

export default {
    name: "MDcheckbox",
    components: {},
    props: ["checked"],
    data() {
        return {
            config,
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="stylus"></style>
