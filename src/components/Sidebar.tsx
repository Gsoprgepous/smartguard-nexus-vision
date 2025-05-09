
import { 
  Database, Server, Cloud, Globe, Link, 
  Shield, ChartBar, Layout, Terminal, Layers 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
};

const NavItem = ({ icon: Icon, label, active }: NavItemProps) => {
  return (
    <Button 
      variant="ghost" 
      className={cn(
        "w-full justify-start gap-3 font-normal", 
        active ? "bg-smartguard-primary bg-opacity-10 text-smartguard-primary" : ""
      )}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Button>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 border-r h-screen bg-white p-4 flex flex-col">
      <div className="flex flex-col space-y-1">
        <h2 className="text-sm font-medium px-4 py-2 text-gray-500">Core Components</h2>
        <NavItem icon={Database} label="Blockchain Nodes" active />
        <NavItem icon={Globe} label="Event Collector" />
        <NavItem icon={Terminal} label="Parser" />
      </div>
      
      <div className="flex flex-col space-y-1 mt-6">
        <h2 className="text-sm font-medium px-4 py-2 text-gray-500">Analysis Tools</h2>
        <NavItem icon={Shield} label="Security Scanner" />
        <NavItem icon={Link} label="Graph Builder" />
        <NavItem icon={ChartBar} label="ML Layer" />
        <NavItem icon={Layers} label="ZK-recognizer" />
      </div>
      
      <div className="flex flex-col space-y-1 mt-6">
        <h2 className="text-sm font-medium px-4 py-2 text-gray-500">Output</h2>
        <NavItem icon={Server} label="Alert Layer" />
        <NavItem icon={Layout} label="Frontend" />
      </div>
      
      <div className="mt-auto">
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="h-4 w-4 text-smartguard-primary" />
            <span className="text-sm font-medium">System Status</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-smartguard-success"></div>
            <span className="text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
