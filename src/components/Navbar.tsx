export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 h-14 border-b border-white/6 bg-[rgb(10,10,10)]/80 backdrop-blur-md">
      <span className="text-sm font-semibold text-white tracking-tight">
        aime<span className="text-indigo-400">.</span>dev
      </span>
      <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-500">
        <a href="#experience" className="hover:text-neutral-200 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-neutral-200 transition-colors">Projects</a>
        <a href="#courses" className="hover:text-neutral-200 transition-colors">Courses</a>
        <a
          href="mailto:aaron.isaac.echavarria@gmail.com"
          className="px-3.5 py-1.5 rounded-lg border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-white/20 transition-all text-xs"
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}
