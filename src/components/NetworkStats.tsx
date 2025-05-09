
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Database, Link, AlertTriangle } from "lucide-react";

const NetworkStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Блокчейны</CardTitle>
          <Server className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">6</div>
          <p className="text-xs text-muted-foreground mt-1">ETH, BSC, TRON, POLYGON, ARBITRUM, OPTIMISM</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Смарт-контракты</CardTitle>
          <Database className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24,851</div>
          <p className="text-xs text-muted-foreground mt-1">+156 за последние 24 часа</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Кросс-чейн мосты</CardTitle>
          <Link className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18</div>
          <p className="text-xs text-muted-foreground mt-1">LayerZero, Axelar, Wormhole...</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Уязвимости</CardTitle>
          <AlertTriangle className="h-4 w-4 text-smartguard-error" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-smartguard-error">31</div>
          <p className="text-xs text-muted-foreground mt-1">3 критических, 12 высоких, 16 средних</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkStats;
