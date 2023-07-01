import Header from "@/components/ui/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/footer";
import Container from "@/components/container";
import CategoriesNav from "@/components/ui/categories-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="fixed top-0 left-0 w-full">
          <Container>
            <Header />
          </Container>
          <hr className="mb-6" />
          <Container>
            <CategoriesNav />
          </Container>
        </div>
        <Container>
          <main>{children}</main>
        </Container>
        <div className="fixed bottom-0 left-0 w-full ">
          <hr />
          <Container>
            <Footer />
          </Container>
        </div>
      </body>
    </html>
  );
}
