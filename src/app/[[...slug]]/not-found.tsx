import { Metadata } from 'next'
import Link from 'next/link'

export const defaultMetadata: Metadata = {
  title: '404',
  description: '404 - Pagina non trovata',
}
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-32 overflow-hidden">
      <p className="uppercase text-lg text-center font-medium leading-none whitespace-nowrap">
        404 - Pagina non trovata
      </p>
      <Link
        href="/"
        className="font-medium hover:bg-blue-400 transition-colors duration-300 ease-out px-64 rounded bg-blue-100 py-16"
      >
        Torna alla home
      </Link>
    </div>
  )
}
