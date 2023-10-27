function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 18 18"
      version="1.1"
      viewBox="0 0 18 18"
      xmlSpace="preserve"
    >
      <path d="M15 0H0v18h3v-6h3v6h3v-6h6v6h3V0h-3zM3 9V3h3v6H3zm12 0H9V3h6v6z"></path>
    </svg>
  )
}

export default Logo
