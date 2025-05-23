import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter bg-gradient-to-b from-gray-900 to-lime-800">
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image-bank-snoopy.png"
            className="rounded-xl !ml-10"
            alt="Snoopy Image"
            width={700}
            height={800}
          />
        </div>
      </div>
      {children}
    </main>
  );
}
