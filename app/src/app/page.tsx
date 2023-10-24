import HeroHome from "@/components/Organisms/HeroHome/HeroHome"
import { PageComponent } from "@/lib/core/component"
import client from "@/lib/sanity/config"
import { pageQuery } from "@/lib/sanity/queries"

async function getPage() {
  const page = await client.fetch({
    query: pageQuery("homepage"),
    config: {
      next: { revalidate: 60 },
    },
  })

  return page
}

export default async function Home() {
  const data = await getPage()

  return (
    <>
      <HeroHome />
      {
        // @ts-ignore
        data?.["components"] &&
          // @ts-ignore
          data?.["components"]?.map(({ name, ...rest }: any, index: number) => (
            <PageComponent
              key={`${name}-${index}`}
              componentName={name}
              {...rest}
            />
          ))
      }
    </>
  )
}
