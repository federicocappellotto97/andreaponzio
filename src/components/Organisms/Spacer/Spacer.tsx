export default function Spacer({
  height,
  mobileHeight,
}: {
  height: number
  mobileHeight?: number
}) {
  return (
    <div
      className="h-[var(--mobile-height)] lg:h-[var(--height)]"
      style={
        {
          "--height": `${height}px`,
          "--mobile-height": `${
            mobileHeight && mobileHeight >= 0 ? mobileHeight : height
          }px`,
        } as React.CSSProperties
      }
    />
  )
}
