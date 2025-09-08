import Image from "next/image";

export default function HeroSection() {
  return (
    <div className={"py-5 flex items-center justify-between "}>
      <div>We provide Cloud based POS solution for your business!</div>
      <div>
        <Image src={"/intro-img.svg"} alt={"intro"} width={300} height={300} />
      </div>
    </div>
  );
}
