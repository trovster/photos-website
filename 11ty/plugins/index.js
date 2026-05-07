import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import EleventyNavigationPlugin from "@11ty/eleventy-navigation"
import EleventyWebcPlugin from "@11ty/eleventy-plugin-webc"

const plugins = {
    EleventyHtmlBasePlugin,
    EleventyNavigationPlugin,
}

export default (config) => {
    config.addPlugin(EleventyWebcPlugin, {
        components: [`${config.dir.input}/components/**/*.webc`],
    })

    config.addPlugin(eleventyImageTransformPlugin, {
        htmlOptions: {
            imgAttributes: {
                loading: "lazy",
                decoding: "async",
            },
            pictureAttributes: {}
        },
    })

    for (const [name, plugin] of Object.entries(plugins)) {
        config.addPlugin(plugin)
    }
}
