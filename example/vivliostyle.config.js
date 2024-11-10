import unified from "unified";
import asciidoctorParseAsHast from "@u1f992/asciidoctor-parse-as-hast";
import rehypeStringify from "rehype-stringify";

// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
    title: "Principia",
    author: "Isaac Newton",
    theme: "./css",
    image: "ghcr.io/vivliostyle/cli:8.16.1",
    entry: ["manuscript.adoc.md"],
    workspaceDir: ".vivliostyle",
    documentProcessor: (config, metadata) =>
        unified()
            .use(asciidoctorParseAsHast, {
                standalone: true,
                attributes: { lang: "ja", linkcss: false, "stylesheet!": null },
            })
            .use(rehypeStringify),
};

export default vivliostyleConfig;
