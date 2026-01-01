import "./theme.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-3xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
