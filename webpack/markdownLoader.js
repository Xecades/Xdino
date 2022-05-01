const matter = require("gray-matter");
const renderMD = require("../utils/renderMD");

const excerpt_separator = "<!-- excerpt -->";

module.exports = function(content) {
    this.cacheable();

    let file = matter(content, { excerpt_separator });
    
    return {
        excerpt: renderMD(file.excerpt.trim()),
        content: renderMD(file.content.split(excerpt_separator).slice(1).join("").trim()),
    };
};
