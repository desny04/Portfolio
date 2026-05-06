export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black flex justify-between items-center px-10 py-4 border-b">

      <h1 className="font-semibold text-lg">Treesa</h1>

      <div className="space-x-6 text-sm">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>

    </nav>
  );
}