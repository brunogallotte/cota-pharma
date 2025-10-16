export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 max-h-screen items-center flex overflow-y-auto">
        {children}
      </div>

      <div className="bg-black w-1/2 max-h-screen" />
    </div>
  );
}
