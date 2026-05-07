import profile from "./profile.js"

export default {
    title: "Photos by Trevor Morris",
    description: "Favourite photos by Trevor Morris.",
    keywords: [
        "photography",
        "photos",
        "11ty",
    ],
    url: process.env.URL ?? "https://photos.trovster.com",
    author: profile.name,
}
