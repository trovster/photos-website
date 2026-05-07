
import path from "node:path"

import exif from "../utils/exif.js"
import palette from "../utils/palette.js"
import getPhotoSiblings from "../utils/photo-siblings.js"

export default async (api, config) => {
  const photos = api.getFilteredByGlob("**/photos/**/*.md").reverse()

  return photos.map(async (photo, index) => {
    const file = path.join(path.dirname(photo.inputPath), photo.data.src)
    const src = path.join(path.dirname(photo.filePathStem), photo.data.src)
    const { previous, next } = getPhotoSiblings(photos, index)

    return {
      url: photo.url,
      date: photo.date,
      data: {
        ...photo.data,
        id: photo.page.fileSlug,
        palette: await palette(file),
        exif: await exif(file),
        src,
        previous,
        next,
      }
    }
  })
}
