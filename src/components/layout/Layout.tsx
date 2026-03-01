import { Header } from "@/components/layout/Header";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ParallaxBackground />
      <Header />
      {children}
    </>
  );
}
