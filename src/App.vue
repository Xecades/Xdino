<template>
    <div class="text-gray-700">
        <Header />
        <div class="w-1/2 mx-auto relative">
            <router-view v-slot="{ Component }" :key="$route.fullPath">
                <transition name="fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import cur from "./assets/js/cursor";

export default {
    name: "App",
    components: { Header, Footer },
    props: [],
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    updated() {
        this.$nextTick(() => {
            cur.refresh();
        });
    },
};
</script>

<style scoped lang="stylus"></style>
