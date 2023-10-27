import client from "@/lib/sanity/config"
import Card from "./_partials/Card"
import { projectsQuery } from "@/lib/sanity/queries"
import { Project } from "@/lib/types"

async function getProjects() {
  const projects = await client.fetch({
    query: projectsQuery(),
    config: {
      next: { revalidate: 60 },
    },
  })

  return projects
}

export default async function ListingProjects() {
  const projects = await getProjects()

  return (
    projects && (
      <div className="px-30 grid grid-cols-3 gap-30">
        {(projects as Project[]).map((project: Project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    )
  )
}
