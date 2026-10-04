import {
  Boxes,
  FileText,
  HardDrive,
  Microscope,
  Network,
  ScanSearch,
  Sprout,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

const icons: Record<IconName, LucideIcon> = {
  microscope: Microscope,
  boxes: Boxes,
  fileText: FileText,
  workflow: Workflow,
  network: Network,
  sprout: Sprout,
  scanSearch: ScanSearch,
  hardDrive: HardDrive,
};

export default function ProjectIcon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const Icon = icons[name];
  return <Icon size={size} aria-hidden />;
}
