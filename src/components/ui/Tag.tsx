const tones = {
  base: "bg-bg",
  raised: "bg-bg-secondary",
  inset: "bg-bg-tertiary",
} as const;

type TagProps = {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  size?: "sm" | "md";
};

export default function Tag({ children, tone = "base", size = "md" }: TagProps) {
  return (
    <span
      className={`text-xs font-mono rounded border border-border text-text-secondary ${
        tones[tone]
      } ${size === "sm" ? "px-1.5 py-0.5" : "px-2 py-0.5"}`}
    >
      {children}
    </span>
  );
}

export function TagList({
  tags,
  tone,
  size,
  className = "",
}: {
  tags: readonly string[];
  tone?: TagProps["tone"];
  size?: TagProps["size"];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap ${size === "sm" ? "gap-1.5" : "gap-2"} ${className}`}>
      {tags.map((tag) => (
        <li key={tag} className="flex">
          <Tag tone={tone} size={size}>
            {tag}
          </Tag>
        </li>
      ))}
    </ul>
  );
}
