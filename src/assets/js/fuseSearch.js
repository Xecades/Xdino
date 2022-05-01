import Fuse from "fuse.js";

let data = [];

for (let i = 0; i < $.length; i++) {
    let meta = $[i];
    let c = require(`@/posts/${meta.url}.md`);
    c.title = meta.title;
    data.push(c);
}

export default new Fuse(data, {
    ignoreLocation: true,
    keys: ["title", "content", "excerpt"],
});
