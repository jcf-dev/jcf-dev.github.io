export const metadata = {
  title: "Joween Flores",
  description: "Joween Flores Profile and Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
