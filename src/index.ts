import unified, { Processor, Plugin } from "unified";
import asciidoctor, { ProcessorOptions } from "asciidoctor";
import rehypeParse, { Options } from "rehype-parse";
import { VFile } from "vfile";

export default function asciidocParseAsHast(
    this: Processor,
    asciidoctorOptions: ProcessorOptions = { standalone: true },
    rehypeParseOptions: Options = {}
) {
    const unifiedProcessor = unified().use(
        rehypeParse as unknown as Plugin<[Options]>,
        rehypeParseOptions
    );
    const asciidoctorInstance = asciidoctor();
    Object.assign(this, {
        Parser: function parser(document: string, file: VFile) {
            return unifiedProcessor.parse(
                asciidoctorInstance.convert(document, asciidoctorOptions)
            );
        },
    });
}
