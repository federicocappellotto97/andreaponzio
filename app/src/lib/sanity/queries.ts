export const pageQuery = (
  slug: string
) => /* groq */ `*[_type == 'pages' && slug.current == '${slug}'][0]{
      title, 
      "slug": slug.current,
      components[] {
          "name": _type,
          _type == 'HeroHome' => {
              "title": title,
              "text": text
          },
          _type == 'ThreeColumns' => {
            columns[] {
              column[] {
                "title": columnItem.title,
                "text": columnItem.text,
              }
            }
          },
            _type == 'ListingProjects' => {},
      }
  }`

export const seoQuery = (
  slug: string
) => /* groq */ `*[_type == 'pages' && slug.current == '${slug}'][0]{
        title, metaDescription, slug
    }
  `

export const settingsQuery = () => /* groq */ `*[_type == 'settings'][0]{
        title,
        afterTitle,
        email,
        footerText
}`

export const pagesQuery = (
  withHomepage = true
) => /* groq */ `*[_type == 'pages' ${
  withHomepage ? "" : "&& slug.current != 'homepage'"
}]{
    "title": title,
    "metaDescription": metaDescription,
    "slug": slug.current,
    "updatetAt": _updatedAt
}`

export const menuQuery = (
  key: string
) => /* groq */ `*[_type == 'menu' && key == '${key}'][0]{
        items[] {
            "link": link
        }
    }`

export const projectsQuery =
  () => /* groq */ `*[_type == 'projects']|order(orderRank){
    "title": title,
    "description": description,
    "image": {
        "src": image.asset->url, 
        "alt": image.asset->originalFilename, 
        "height": image.asset->metadata.dimensions.height,
        "width": image.asset->metadata.dimensions.width
    },
    "id": _id
}`
