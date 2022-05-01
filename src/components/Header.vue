<template>
    <transition name="search">
        <Search class="gpu" v-show="searching" @close="closeSearch" />
    </transition>

    <!-- 一直显示的全宽背景 -->
    <div class="w-full h-12 fixed z-10 bg-gray-50 bg-opacity-60 backdrop-blur-md backdrop-filter" />

    <!-- 在菜单打开前显示的内容 -->
    <div class="z-20 select-none text-gray-500 w-1/2 mx-auto sticky h-auto top-0">

        <div class="w-full inline-block">

            <!-- 左侧站点标题 -->
            <LinkTo url="/" class="cursor float-left -ml-3 p-3 hover:bg-gray-100 transition-all font-bold text-2xl leading-none">
                {{ config.nav.title }}
            </LinkTo>

            <!-- 右侧菜单按钮 -->
            <span class="cursor float-right -mr-3 p-3 hover:bg-gray-100 transition-all h-12 w-12 text-center leading-none" id="more" @mouseenter="display()">
                <fas icon="ellipsis-v" class="align-middle" />
            </span>
        </div>
    </div>

    <!-- 菜单 -->
    <div class="fixed w-full top-0 left-0 z-30 text-gray-500 bg-gray-100 select-none animate__animated animate__fadeOutUp invisible gpu"  id="nav" @mouseleave="undisplay()">

        <div class="w-1/2 mx-auto h-12">

            <!-- 左侧显示的格言 -->
            <LinkTo url="/" class="cursor float-left -ml-3 p-3 h-12 hover:bg-gray-200 transition-all leading-none">
                <span class="align-middle">{{ config.nav.text }}</span>
            </LinkTo>

            <!-- 搜索按钮 -->
            <span class="cursor inline-block float-right -mr-3 text-center h-12 p-3 leading-none w-12 hover:bg-gray-200 transition-all" id="search" @click="search()">
                <fas icon="search" class="align-middle" />
            </span>

            <!-- 菜单（们） -->
            <LinkTo
                class="cursor inline-block float-right p-3 leading-none h-12 hover:bg-gray-200 transition-all"
                :url="item.url"
                v-for="(item, index) in config.nav.menu"
                :key="index"
                ><span class="align-middle">{{ item.name }}</span>
            </LinkTo>
            
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
import Search from "./Search.vue";

export default {
    name: "Header",
    components: { Search },
    props: [],
    data() {
        return { config, searching: false };
    },
    mounted() {
        setTimeout(() => {
            document.querySelector("#nav").classList.remove("invisible");
        }, 500);
    },
    methods: {
        search() {
            this.searching = true;
        },
        display() {
            document.querySelector("#nav").classList.remove("animate__fadeOutUp");
            document.querySelector("#nav").classList.add("animate__fadeInDown");
        },
        undisplay() {
            document.querySelector("#nav").classList.remove("animate__fadeInDown");
            document.querySelector("#nav").classList.add("animate__fadeOutUp");
        },
        closeSearch() {
            this.searching = false;
        }
    },
};
</script>

<style scoped lang="stylus">
#nav
    --animate-duration: .5s;
</style>
