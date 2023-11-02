import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"
import { schemaTypes } from "./cms/schemas"
import Logo from "./cms/schemas/ui/Logo"

export default defineConfig({
  basePath: "/admin", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            ...S.documentTypeListItems(),
            orderableDocumentListDeskItem({ type: "projects", S, context }),
          ]),
    }),
    visionTool(),
  ],
  title: "andreaponzio",
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
})
