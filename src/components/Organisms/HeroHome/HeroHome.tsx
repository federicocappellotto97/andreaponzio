import HomeImage from './_partials/HomeImage'

export default function HeroHome({ title, text }: { title: string; text: any }) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="relative">
        <HomeImage />
        <div className="absolute hidden dark:block -bottom-26 w-205 left-full -translate-x-1/2">
          <p className="[&>*:nth-child(1)]:text-blue-300 [&>*:nth-child(2)]:text-blue-200 [&>*:nth-child(3)]:text-blue-600">
            {title.split('').map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </p>
          <p className="text-white">{text}</p>
        </div>
      </div>
    </div>
  )
}
