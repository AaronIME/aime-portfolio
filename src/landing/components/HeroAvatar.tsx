export const HeroAvatar = () => {
  return (
    <div className="relative shrink-0">
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/40">
        <div className="w-full h-full bg-linear-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/10 flex items-center justify-center text-3xl font-bold text-indigo-300 select-none">
          AM
        </div>
      </div>
      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[rgb(10,10,10)] shadow" />
    </div>
  )
}
