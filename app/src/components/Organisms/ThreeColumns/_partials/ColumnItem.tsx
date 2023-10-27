import { ConditionalWrapper } from "@/lib/core/ConditionalWrapper"
import { titleStyle } from "../ThreeColumns.style"
import { PortableText } from "@portabletext/react"
import { cx } from "class-variance-authority"

export default function ColumnItem({
  title,
  text,
  isMain,
}: {
  title: string
  text: any
  isMain: boolean
}) {
  return (
    <div>
      <ConditionalWrapper
        wrapper={(children) =>
          isMain ? (
            <h1 className={titleStyle}>{children}</h1>
          ) : (
            <h2 className={titleStyle}>{children}</h2>
          )
        }
      >
        {title}
      </ConditionalWrapper>
      <hr className="h-8 bg-gray-dark dark:bg-white mt-15 mb-6" />
      {text && (
        <div
          className={cx(
            "px-16 prose max-w-none text-black dark:text-white dark:prose-strong:text-white dark:prose-a:text-white hover:prose-a:text-blue-500 prose-a:transition-colors prose-a:duration-300 prose-a:ease-out prose-a:font-normal prose-a:no-underline",
            isMain ? "text-lg" : "text-base"
          )}
        >
          <PortableText value={text} />
        </div>
      )}
    </div>
  )
}
