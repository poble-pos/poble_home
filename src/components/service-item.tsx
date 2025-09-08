import { HiChartBar } from "react-icons/hi2";

export default function ServiceItem() {
  return (
    <div className={"flex gap-3 items-center col-span-1"}>
      <div>
        <HiChartBar />
      </div>

      <div>
        <div>Centralized cloudbased reporting</div>

        <p>
          Utilize cloud based technology to give you full access whenever wherever. Always up to
          date with the latest trends. No need to worry about your data anymore, it will be backed
          up automatically.
        </p>
      </div>
    </div>
  );
}
