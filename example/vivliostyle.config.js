import unified from "unified";
import asciidoctorParseAsHast from "@u1f992/asciidoctor-parse-as-hast";
import rehypeStringify from "rehype-stringify";

// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
    title: "AsciiDoc入門",
    author: "ChatGPT",
    theme: "./css",
    image: "ghcr.io/vivliostyle/cli:8.16.1",
    entry: ["manuscript.adoc.md"],
    workspaceDir: ".vivliostyle",
    documentProcessor: (options, metadata) =>
        unified()
            .use(asciidoctorParseAsHast, {
                standalone: true,
                attributes: {
                    lang: "ja",
                    stylesheet: options.style.join(","),
                    nofooter: true,
                },
            })
            // .use((tree) => {
            //     console.log(options, metadata);
            //     return tree;
            // })
            .use(rehypeStringify),
};

export default vivliostyleConfig;
