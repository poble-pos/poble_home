import ServiceItem from "@/components/ServiceItem";

export default function Services() {
  return (
    <div className={"flex flex-col gap-5"}>
      <div>Services</div>
      <div>All sets ready for only you</div>
      <div className={"grid grid-cols-2"}>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </div>
  );
}
