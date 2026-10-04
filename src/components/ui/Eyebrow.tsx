type EyebrowProps = {
  children: React.ReactNode;
  as?: "h2" | "h3";
  className?: string;
};

/** The small uppercase mono heading used above every section. */
export default function Eyebrow({
  children,
  as: Heading = "h2",
  className = "mb-4",
}: EyebrowProps) {
  return (
    <Heading
      className={`text-xs font-mono text-text-secondary uppercase tracking-widest ${className}`}
    >
      {children}
    </Heading>
  );
}
