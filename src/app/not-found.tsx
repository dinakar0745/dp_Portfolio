import Link from "next/link";
import PageShell from "@/components/ui/PageShell";
import { buttonSecondary } from "@/components/ui/classes";

export default function NotFound() {
  return (
    <PageShell>
      <p className="font-mono text-sm text-accent mb-3">404</p>
      <h1 className="text-3xl font-bold text-text-primary mb-3">
        Page not found
      </h1>
      <p className="text-sm text-text-secondary max-w-xl mb-8">
        That page doesn&apos;t exist, or it has moved.
      </p>
      <Link href="/" className={buttonSecondary}>
        Back to home
      </Link>
    </PageShell>
  );
}
