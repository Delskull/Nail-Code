
function Header() {
  return (
    <div className="min-h-[100px] w-screen flex items-center justify-between">
      <h1>Nail Code</h1>
      <nav>
        <ul className="flex w-[400px] justify-between">
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-[#FCF8EF]/5">Home</a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-white/5">Services</a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-white/5">Gallery</a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-white/5">Contact</a>
        </ul>
      </nav>
      <button>Записаться</button>
    </div>
  )
}

export default Header
