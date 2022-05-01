<template>
    <div class="fixed w-full h-full z-40 bg-black bg-opacity-30" @click.self="$emit(`close`)">
        <div class="absolute panel bg-white shadow-xl rounded-2xl px-4 pb-4 flex flex-col">
            <div class="flex gap-x-1 border-b flex-none w-full">
                <span class="text-lg text-gray-300 w-9 h-14 inline-block text-center flex-none">
                    <fas icon="search" class="align-middle h-14" />
                </span>
                <input class="cursor h-14 inline-block flex-grow outline-none appearance-none"
                    :placeholder="config.searchPlaceholder"
                    v-model="query"
                >
            </div>
            <div class="flex-grow mt-3 overflow-scroll -mx-4 pl-4 pr-2 scroll">
                <LinkTo class="w-full bg-gray-50 hover:bg-gray-100 duration-100 transition-all my-4 rounded-2xl px-4 py-5 flex gap-x-1"
                    v-for="(c, i) in searchData"
                    @click="$emit(`close`), clear()"
                    :key="i"
                    :url="`/articles/${$[c].url}`"
                    :data-index="i"
                >

                    <div class="flex-grow inline-block">
                        <!-- 分类 -->
                        <div class="text-sm text-gray-400 text-opacity-70 pb-1"
                            v-if="$[c].category"
                        >
                            /{{ $[c].category }}
                        </div>

                        <!-- 标题 -->
                        <div class="text-gray-600 leading-relaxed">
                            {{ $[c].title }}
                        </div>

                    </div>

                    <!-- 日期 -->
                    <div class="flex-none inline-block text-right text-sm text-gray-400 text-opacity-70">
                        {{ dayjs($[c].date).format("YYYY-MM-DD") }}
                    </div>
                </LinkTo>

                <div class="w-full h-full text-gray-100 relative" v-if="(!query) || (query && !searchData.length)">
                    <fas class="status align-middle absolute" icon="search" v-if="!query" />
                    <fas class="status align-middle absolute" icon="frown" v-if="query && !searchData.length" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import config from "@/config.yml";
import fuse from "../assets/js/fuseSearch";
import dayjs from "dayjs";

import cur from "../assets/js/cursor";

export default {
    name: "Search",
    components: {},
    props: [],
    data() {
        return { $, config, dayjs, query: "" };
    },
    mounted() {},
    methods: {
        clear() {
            setTimeout(() => {
                this.query = "";
            }, 500)
        }
    },
    computed: {
        searchData() {
            let arr = [];
            let data = fuse.search(this.query || "");

            for (let i = 0; i < data.length; i++) {
                arr.push(data[i].refIndex);
            }

            return arr;
        }
    },
    updated() {
        this.$nextTick(() => {
            cur.refresh();
        });
    },
};
</script>

<style scoped lang="stylus">
.panel
    width 40rem;
    height (@width / 1.618);
    top 50%;
    left 50%;
    margin-top -(@height / 2);
    margin-left -(@width / 2);

.scroll::-webkit-scrollbar
    width .5rem

.status
    transform scale(7)
    width 1rem;
    height 1rem;
    top 50%;
    left 50%;
    margin-top -(@height / 2);
    margin-left -(@width / 2);
</style>
