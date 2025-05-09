
import { cn } from "@/lib/utils";

type TechnologyCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
};

const TechnologyCard = ({ title, description, icon, color = "bg-blue-50" }: TechnologyCardProps) => {
  return (
    <div className={cn("p-5 rounded-lg shadow-sm border flex items-start gap-4", color)}>
      <div className="p-3 rounded-full bg-white">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TechnologyCard;
