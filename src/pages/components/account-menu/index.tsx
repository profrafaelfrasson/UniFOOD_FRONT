import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Building, LogOut } from "lucide-react";

export function AccountMenu() {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            Nome da Cantina
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">

            <span>Name</span>
            <span className="text-sm  font-normal text-muted-foreground">
              email@gmail.com
            </span>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem
            asChild
            className="text-rose-500 dark:text-rose-400"
          >
            <button className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  )
}