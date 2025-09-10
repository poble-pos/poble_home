interface Props {
  title: string;
  description: string;
}

export default function TsAndCsItem({ title, description }: Props) {
  return (
    <div className={"flex flex-col gap-3"}>
      <div className={"font-semibold text-lg"}>{title}</div>
      <p>{description}</p>
    </div>
  );
}
