const Navbar = () => {
  return (
    <>
      <header className=" bg-black py-14">
        <nav className="flex gap-4">
          <img className="pl-28" src="/images/Vector.png" alt="logo"></img>

          <h1 className="text-white text-2xl leading-9 tracking-wide pt-1 font-bold">
            Voluble
          </h1>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"></ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
