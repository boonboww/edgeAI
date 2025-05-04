import { useEffect } from "react";
import { Navbar } from "../elements/Navbar";
import { Footer } from "../elements/Footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-12  md:gap-y-20 overflow-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};
