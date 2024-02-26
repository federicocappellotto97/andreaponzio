import Logo from '@/components/Atoms/Logo/Logo'
import { Metadata } from 'next'
import { Link } from '@/lib/core/Link'

export const defaultMetadata: Metadata = {
  title: '404',
  description: '404 - Pagina non trovata',
}
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center overflow-hidden">
      <h1 className="text-xl text-center font-bold whitespace-nowrap">Errore</h1>
      <p className="text-lg text-center whitespace-nowrap">Qualcosa è andato storto.</p>
      <Logo className="rotate-180 h-192 mt-30" />
      <Link
        href="/"
        className="font-bold mt-30 after:h-1 relative after:absolute after:bottom-0 after:inset-x-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:ease-out after:origin-center after:bg-black"
      >
        Torna alla pagina iniziale.
      </Link>
    </div>
  )
}
