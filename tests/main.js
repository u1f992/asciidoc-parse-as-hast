import unified from "unified";
import asciidocParseAsHast from "../dist/index.js";
import rehypeStringify from "rehype-stringify";

console.log(
    await unified()
        .use(asciidocParseAsHast)
        .use(rehypeStringify)
        .process("= sample")
);
