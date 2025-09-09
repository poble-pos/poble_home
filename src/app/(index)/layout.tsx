import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { ReactNode } from "react";
import CartButton from "@/components/cart-button";

interface Props {
  children: ReactNode;
}

export default function IndexLayout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <main className={"w-full mx-auto"}>{children}</main>
      <Footer />
      <CartButton />
    </div>
  );
}
