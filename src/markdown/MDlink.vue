<template>
    <template v-if="insite(url)">
        <router-link :to="encodeURI(url)" class="cursor"><slot /></router-link>
    </template>
    <template v-else>
        <a :href="url" class="cursor" target="_blank" rel="noopener noreferrer">
            <slot />
            <fas icon="external-link-alt" class="external" />
        </a>
    </template>
</template>

<script>
import config from "@/config.yml";

export default {
    name: "MDlink",
    components: {},
    props: ["url"],
    data() {
        return {
            config,
        };
    },
    mounted() {},
    methods: {
        insite(url) {
            return url.startsWith("/");
        },
    },
};
</script>

<style scoped lang="stylus"></style>
