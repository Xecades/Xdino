const fs = require("fs-extra");
const readMD = require("./utils/readMD");

/**
 * 分析 markdown，传递其属性
 *
 * @returns {Array} 文章属性
 */
function analyzePosts() {
    let posts = fs.readdirSync("./src/posts/");
    let postData = [];

    for (let i = 0; i < posts.length; i++) {
        let property = readMD(`./src/posts/${posts[i]}`);
        property.url = posts[i].split(".")[0];
        postData.push(property);
    }

    postData.sort((a, b) => {
        if (a.meta.pin && !b.meta.pin) return -1;
        if (!a.meta.pin && b.meta.pin) return 1;
        
        return b.meta.date - a.meta.date;
    });

    return postData;
}

/**
 * 根据 postData 得到 url 和编号的对应表
 *
 * @param {Array} postData 数据
 * @returns {Object} 对应表
 */
function generateRanks(postData) {
    let ranks = {};

    for (let i = 0; i < postData.length; i++) {
        ranks[postData[i].url] = i;
    }

    return ranks;
}

/**
 * 根据 postData 得到文章分类
 *
 * @param {Array} postData 数据
 * @returns {Object} 各个分类所含的文章编号
 */
function generateCategories(postData) {
    let categories = {};

    for (let i = 0; i < postData.length; i++) {
        let cate = postData[i].meta.category;

        if (!cate) cate = "未分类";
        if (!categories[cate]) {
            categories[cate] = [];
        }

        categories[cate].push(i);
    }

    return categories;
}

const $ = analyzePosts();
const _ = generateRanks($);
const cate = generateCategories($);

fs.writeFileSync("./posts.json", JSON.stringify($), "utf-8");
fs.writeFileSync("./ranks.json", JSON.stringify(_), "utf-8");
fs.writeFileSync("./categories.json", JSON.stringify(cate), "utf-8");