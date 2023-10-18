import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Adrine Virtual Assistant: Your Personal Virtual Assistant for Efficient Productivity",
  description:
    "Adrine Virtual Assistant is the ultimate solution for boosting your productivity. With a wide range of handy features and personalized assistance, our virtual assistant will revolutionize the way you work. Say goodbye to endless to-do lists and hello to efficient productivity.",
  keywords: [
    "virtual assistant for productivity",
    "personal virtual assistant",
    "boost productivity with virtual assistant",
    "efficient productivity with virtual assistant",
    "personalized virtual assistant",
  ],
  creator: "Levis Nyingi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
