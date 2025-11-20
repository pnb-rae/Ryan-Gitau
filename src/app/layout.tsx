import "./globals.css";
import Aurora from "@/components/ui/aurora";

// Main layout component with Aurora background effect

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-black text-white min-h-screen h-full">
        {/* Global Aurora Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden w-screen h-screen">
          <Aurora 
            colorStops={["#3A29FF", "#7C3AED", "#EC4899"]}
            blend={0.3}
            amplitude={0.8}
            speed={0.4}
            className="opacity-40 w-full h-full"
          />
        </div>
        
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
