function Header() {
  const colorNav = `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-[#FCF8EF]/80`;
  return (
    <div className="min-h-25 flex items-center justify-between px-4">
      <h1 className={colorNav}>Nail Code</h1>
      <nav>
        <ul className="flex w-100 justify-between">
          <a href="#" className={colorNav}>
            Home
          </a>
          <a href="#" className={colorNav}>
            Services
          </a>
          <a href="#" className={colorNav}>
            Gallery
          </a>
          <a href="#" className={colorNav}>
            Contact
          </a>
        </ul>
      </nav>
      <button className={`"${colorNav} border"`}>Записаться</button>
    </div>
  );
}

export default Header;
