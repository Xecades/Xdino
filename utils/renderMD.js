const marked = require("marked");
const hljs = require("highlight.js");

function lineNumberize(html) {
    let text = html.replace(/<span[^>]*>|<\/span>/g, "");
    let num = 1;

    if (/\r|\n$/.test(text)) html += '<span class="ln-eof"></span>';

    html = html.replace(/\r\n|\r|\n/g, (a) => {
        num++;
        let str = ("  " + num).substr(-3);
        return a + `<span class="ln" data-num="${str}"></span>`;
    });

    html = '<span class="ln" data-num="  1"></span>' + html;
    html = '<span class="ln-bg"></span>' + html;

    return html;
}

function hl(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return lineNumberize(hljs.highlight(code, { language }).value);
}

const langPrefix = "hljs language-";

// const snippet = {
//     name: "snippet",
//     level: "inline",

//     start(src) {
//         return src.match(/{%/)?.index;
//     },

//     tokenizer(src, tokens) {
//         const regex = /{%(.*?)%}/;
//         const match = regex.exec(src);
//         if (match) {
//             return {
//                 type: "snippet",
//                 raw: match[0],
//                 cmds: match[1].trim(),
//             };
//         }
//     },

//     renderer(token) {
//         return `<MDsnippet cmds="${escape(token.cmds)}" />`;
//     },
// };

const renderer = {
    link: (href, title, text) => `<MDlink url="${href}" card="${title}">${text}</MDlink>`,
    image: (href, title, text) => `<MDimage url="${href}" caption="${text}" />`,
    checkbox: (checked) => `<MDcheckbox checked="${checked}" />`,
};

marked.setOptions({
    highlight: hl,
    langPrefix,
});

marked.use({ renderer });
// marked.use({ extensions: [snippet] });

module.exports = marked;
