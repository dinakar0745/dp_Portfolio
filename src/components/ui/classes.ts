/** Shared Tailwind class strings, so card and button styling lives in one place. */
export const card = "border border-border rounded-lg bg-bg-secondary";

export const cardInteractive = `${card} transition-colors group-hover:border-accent/40 group-hover:bg-bg-tertiary`;

export const buttonPrimary =
  "inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg text-sm font-medium rounded hover:bg-accent/90 transition-colors";

export const buttonSecondary =
  "inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-text-secondary hover:text-text-primary hover:border-accent/50 rounded transition-colors";

export const iconTile =
  "rounded bg-bg-tertiary border border-border text-accent transition-colors group-hover:border-accent/40";
