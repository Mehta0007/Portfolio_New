export default function LinksBar() {
  return (
    <div className="flex gap-4 items-center">
      <span>➡️</span>

      <a href="mailto:jamesmca@live.com" className="underline">
        Email me
      </a>

      <a href="https://github.com/Mehta0007" target="_blank" className="underline">
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/ankit-mehta-7340b034a/"
        target="_blank"
        className="underline"
      >
        LinkedIn
      </a>
    </div>
  );
}
