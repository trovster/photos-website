import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import { feedPlugin } from "@11ty/eleventy-plugin-rss"
import EleventyWebcPlugin from "@11ty/eleventy-plugin-webc"
import site from "../../src/data/site.js"

export default (config) => {
    const plugins = [
        {
            plugin: EleventyHtmlBasePlugin,
        },
        {
            plugin: EleventyWebcPlugin,
            options: {
                components: [`${config.dir.input}/components/**/*.webc`],
            },
        },
        {
            plugin: feedPlugin,
            options: {
                type: "atom",
                outputPath: "/feed.xml",
                collection: {
                    name: "photos",
                    limit: 10,
                },
                metadata: {
                    language: "en",
                    title: site.title,
                    subtitle: site.description,
                    base: site.url,
                    author: {
                        name: site.author,
                    },
                },
            },
        },
        {
            plugin: eleventyImageTransformPlugin,
            options: {
                htmlOptions: {
                    imgAttributes: {
                        loading: "lazy",
                        decoding: "async",
                    },
                    pictureAttributes: {},
                },
            },
        },
    ]

    for (const plugin of plugins) {
        config.addPlugin(plugin.plugin, plugin.options)
    }
}
