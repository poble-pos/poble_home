import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className={"border-b sticky top-0 left-0 right-0 p-3 w-full bg-white"}>
      <div className={"w-full max-w-7xl mx-auto flex items-center justify-between"}>
        <div>
          <Image src={"/logo.png"} alt={"logo"} width={150} height={100} />
        </div>
        <div className={"flex-items-center gap-5"}>
          <Button variant={"link"} className={"hover:cursor-pointer"}>
            Products
          </Button>
        </div>
      </div>
    </div>
  );
}
