export const pageQuery = (
  slug: string
) => /* groq */ `*[_type == 'page' && slug.current == '${slug}'][0]{
                    title, 
                    "slug": slug.current,
                    components[] {
                        "name": _type,
                        _type == 'HeroBio' => {
                            "image": {
                                "src": image.asset->url, 
                                "alt": image.asset->originalFilename, 
                                "height": image.asset->metadata.dimensions.height,
                                "width": image.asset->metadata.dimensions.width
                            },
                            "text": text,
                        },
                        _type == 'HeroWhatIDo' => {
                            "text": text,
                            "text2": text2
                        },
                        _type == 'HeroGrid' => {
                            images[] {
                                "src": asset->url, 
                                "alt": asset->originalFilename, 
                                "height": asset->metadata.dimensions.height,
                                "width": asset->metadata.dimensions.width
                            },
                            "title": ^.title
                        },
                        _type == 'HeroContacts' => {
                            "image": {
                                "src": image.asset->url, 
                                "alt": image.asset->originalFilename, 
                                "height": image.asset->metadata.dimensions.height,
                                "width": image.asset->metadata.dimensions.width
                            },
                            "phone": phone
                        }
                    }
                }`

export const seoQuery = (
  slug: string
) => /* groq */ `*[_type == 'page' && slug.current == '${slug}'][0]{
        title, description, slug
    }
  `

export const settingsQuery = () => /* groq */ `*[_type == 'settings'][0]{
        title,
        afterTitle,
        email
}`

export const pagesQuery = () => /* groq */ `*[_type == 'page']{
    "slug": slug.current,
    "updatetAt": _updatedAt
}`
