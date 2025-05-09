
import { Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white border-b shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-smartguard-primary" />
        <h1 className="text-xl font-bold">SmartGuard.Nexus.Vision</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-smartguard-error rounded-full w-4 h-4 text-white text-xs flex items-center justify-center">3</span>
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-smartguard-primary text-white flex items-center justify-center">
            SG
          </div>
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
