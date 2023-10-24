import SanityClient from "next-sanity-client"

const client = new SanityClient({
  projectId: "ud7dp078",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
})

export default client
