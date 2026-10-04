import { card } from "@/components/ui/classes";

/** A titled box for use inside blog posts: <Callout title="…">text</Callout>. */
export default function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${card} p-4`}>
      <h3 className="text-sm font-mono text-accent mb-2">{title}</h3>
      {children}
    </div>
  );
}
