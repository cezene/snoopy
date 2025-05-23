import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter bg-gradient-to-b from-gray-900 to-orange-900">
      <div className="auth-asset">
        <div> 

        <Image src="/icons/snoopy-auth-image.jpg" className="rounded-xl !ml-10" alt="Snoopy Image" width={900} height={900}/>
        </div>
      </div>
      {children}
    </main>
  );
}
