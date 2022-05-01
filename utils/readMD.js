const matter = require("gray-matter");
const renderMD = require("./renderMD");

const excerpt_separator = "<!-- excerpt -->";

/**
 * 读取 markdown 文件并渲染
 * 
 * @typedef {Object} MarkdownData
 * @property {Object} meta 文档属性
 * @property {string} excerpt 文章摘录
 * @property {string} text 纯文本内容
 * @property {string} content 正文内容
 * @property {string} url 文章链接
 * 
 * @param {string} path markdown 文件路径
 * @returns {MarkdownData} 页面数据
 */
module.exports = function(path) {
    let file = matter.read(path, { excerpt_separator });
    
    return {
        url: path,
        meta: file.data,
        excerpt: renderMD(file.excerpt.trim()),
        content: renderMD(file.content.split(excerpt_separator).slice(1).join("").trim()),
    };
};
