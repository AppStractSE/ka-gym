import { ReactNode } from "react";
import ScrollToTop from "./ScrollToTop";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      {children}
      <ScrollToTop />
    </main>
  );
};

export default Main;
