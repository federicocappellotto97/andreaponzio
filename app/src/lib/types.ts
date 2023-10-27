export type Image = {
  src: string
  alt: string
  width: number
}

export type Link = {
  blank?: boolean
  label: string
  url: string
}

export type Project = {
  title: string
  description?: any
  image: Image
  id: string
}
