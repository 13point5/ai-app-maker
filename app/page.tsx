import { Toolbar } from "@/components/builder/toolbar";
import { Button } from "@/components/ui/button";
import {
  FormInputIcon,
  ImageIcon,
  MenuIcon,
  SettingsIcon,
  TypeIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="border-b p-4 flex gap-4 items-center justify-between">
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>

        <p className="text-xl">App Name</p>

        <Button size="icon" variant="ghost">
          <SettingsIcon />
        </Button>
      </div>

      <Toolbar />
    </main>
  );
}
