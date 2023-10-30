import Script from "next/script"

export const DarkMode = () => {
  return (
    <Script id="dark-mode">{`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        `}</Script>
  )
}
