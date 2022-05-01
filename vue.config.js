const matter = require("gray-matter");
const webpack = require("webpack");
const fs = require("fs-extra");
const path = require("path");
const fuse = require("fuse.js");

/**
 * 分析 markdown，传递其属性
 *
 * @returns {Array} 文章属性
 */
 function analyzePosts(data) {
    let posts = fs.readdirSync("./src/posts/");

    for (let i = 0; i < posts.length; i++) {
        let meta = matter.read(`./src/posts/${posts[i]}`).data;
        meta.url = posts[i].slice(0, -3);
        data.push(meta);
    }

    data.sort((a, b) => {
        if (a.pin && !b.pin) return -1;
        if (!a.pin && b.pin) return 1;
        
        return b.date - a.date;
    });
}

/**
 * 根据 data 得到 url 和编号的对应表
 *
 * @param {Object} data 数据
 * @returns {Object} 对应表
 */
function generateRanks(data) {
    for (let i = 0; i < data.length; i++) {
        data[data[i].url] = i;
    }
}

/**
 * 根据 data 得到文章分类
 *
 * @param {Object} data 数据
 * @returns {Object} 各个分类所含的文章编号
 */
function generateCategories(data, categories) {
    for (let i = 0; i < data.length; i++) {
        let cate = data[i].category;

        if (!cate) cate = "未分类";
        if (!categories[cate]) categories[cate] = [];

        categories[cate].push(i);
    }
}

/**
 * 对 postData 创建索引
 *
 * @param {Array} postData 数据
 */
function indexFuse(postData) {
    let clone = JSON.parse(JSON.stringify(postData));

    clone.forEach((e) => {
        e.content = e.content.replace(/<[^>]*>/g, "");
        e.excerpt = e.excerpt.replace(/<[^>]*>/g, "");
    });

    const index = fuse.createIndex(["meta.title", "content", "excerpt"], clone);
    fs.writeFile("./src/database.json", JSON.stringify(index.toJSON()));
}

let _$ = [], CATE = {}, $ = {};
analyzePosts(_$);

for (let key in _$) $[key] = _$[key];
$.length = _$.length;

generateRanks($);
generateCategories($, CATE);

module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        // loaders
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        "html-loader",
                        path.resolve("webpack/markdownLoader.js"),
                    ],
                },
            ],
        },

        // plugins
        plugins: [
            new webpack.DefinePlugin({
                $: JSON.stringify($),
                CATE: JSON.stringify(CATE),
            }),
        ],
    },
};
