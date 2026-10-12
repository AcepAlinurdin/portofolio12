import "./globals.css";

export const metadata = {
  title: "Acep Alinurdin — Software Engineer & Creative Technologist",
  description: "Portofolio Acep Alinurdin, lulusan Teknik Informatika UNIKOM dengan pengalaman software engineering, creative technology, full-stack development, dan project management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
