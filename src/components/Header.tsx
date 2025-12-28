export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <a href="/" className="text-lg font-semibold">
        Ankit M.
      </a>

      <nav className="flex gap-4 text-xl">
        <a href="https://github.com/Mehta0007" target="_blank">🐙</a>
        <a href="https://www.linkedin.com/in/ankit-mehta-7340b034a/" target="_blank">
          💼
        </a>
      </nav>
    </header>
  );
}
