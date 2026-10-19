/** "No lock-in · No hidden fees · Support 7 days a week" list closing the inner pages. */
export function CtaTicks({ items }: { items: string[] }) {
  return (
    <ul className="ticks rv">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
