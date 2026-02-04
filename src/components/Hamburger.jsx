import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";

function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <DialogTitle className="font-bold">Bhavesh</DialogTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <ul className="flex flex-col gap-8 text-lg text-slate-600">
            <li className="hover:text-blue-500">
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>

            <li className="hover:text-blue-500">
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li className="hover:text-blue-500">
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>

            <li className="hover:text-blue-500" onClick={() => setOpen(false)}>
              <a href="https://drive.google.com/file/d/1G4kj8Gn6YTJam0TYzGMYWrtUzKXuHVwK/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Hamburger;
