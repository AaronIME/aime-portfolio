export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/6 py-8 px-6 md:px-12 lg:px-20 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
        <span>© {new Date().getFullYear()} Aime Developer. All rights reserved.</span>
        <span>Built with React + Tailwind CSS</span>
      </div>
    </footer>
  )
}
