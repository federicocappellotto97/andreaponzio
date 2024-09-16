import client, { defaultSanityConfig } from '@/lib/sanity/config'
import Card from './_partials/Card'
import { projectsQuery } from '@/lib/sanity/queries'
import { Project } from '@/lib/types'

async function getProjects() {
  const projects = await client.fetch({
    query: projectsQuery(),
    config: defaultSanityConfig,
  })

  return projects
}

export default async function ListingProjects() {
  const projects = await getProjects()

  return (
    projects && (
      <div className="px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 lg:gap-30">
        {(projects as Project[]).map((project: Project, index) => (
          <Card key={project.id} {...project} index={index} />
        ))}
      </div>
    )
  )
}
