import { createRouter, createWebHistory } from "vue-router";
const config = require("../config.yml");

const routes = [
    { path: "/", name: "Home", component: () => import("../views/Home.vue"), meta: { title: "Xecades" } },
    { path: "/categories", name: "Category", component: () => import("../views/CategoryIndex.vue"), meta: { title: "分类 | Xecades" } },
    // { path: "/articles/:url", name: "Article", component: () => import("../views/Article.vue"), meta: { title: "文章 | Xecades" } },
];

const router = createRouter({
    mode:'history',
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {
            left: 0,
            top: 0,
            behavior: "smooth",
        };
    },
});

for (let i = 0; i < $.length; i++) {
    if ($[i].link) continue;

    router.addRoute({
        name: `Article-${i}`,
        path: "/articles/" + $[i].url,
        component: () => import("../views/Article.vue"),
        meta: { title: `${$[i].title} | Xecades` },
    });
}

for (let url in CATE) {
    router.addRoute({
        name: `Category-${url}`,
        path: "/categories/" + encodeURI(url),
        component: () => import("../views/Category.vue"),
        meta: { title: `分类：${url} | Xecades` },
    });
}

for (let i = 1; i < $.length / config.postsPerPage; i++) {
    router.addRoute({
        name: `Page-${i + 1}`,
        path: `/page/${i + 1}`,
        component: () => import("../views/Home.vue"),
        meta: { title: `Xecades` },
    });
}

router.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = to.meta.title;
    next();
});

export default router;
