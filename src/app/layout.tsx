import Header from "@/components/ui/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/footer";
import Container from "@/components/container";

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
      <body className={inter.className}>
        <Container>
          <Header />
        </Container>
        <Container>
          <main>{children}</main>
        </Container>
        {/* <Container>
          <Footer />
        </Container> */}
      </body>
    </html>
  );
}
