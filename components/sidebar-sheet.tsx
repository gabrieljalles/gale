import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left text-xs text-gray-600">
          Esse botão ainda não faz nada! Volte mais tarde.
        </SheetTitle>
      </SheetHeader>
    </SheetContent>
  );
};

export default SidebarSheet;
