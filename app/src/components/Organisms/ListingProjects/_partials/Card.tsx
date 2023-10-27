import { Project } from "@/lib/types"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

export default function CardProject({ title, description, image }: Project) {
  return (
    <div className="aspect-[440/293] relative group overflow-hidden">
      <Image
        src={image.src}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-blue-100 p-30 flex flex-col -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">
        <h2 className="text-lg font-medium">{title}</h2>
        {description && (
          <div className="mt-auto">
            <PortableText value={description} />
          </div>
        )}
      </div>
    </div>
  )
}
