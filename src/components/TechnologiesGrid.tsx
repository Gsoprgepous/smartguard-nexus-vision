
import { Link, Database, Shield, Server, Cpu, Network, Terminal, LayersFill, ChartBar, Code } from "lucide-react";
import TechnologyCard from "./TechnologyCard";

const TechnologiesGrid = () => {
  const technologies = [
    {
      title: "Кросс-чейн и Интероперабельность",
      description: "Сбор данных и изменений смартов на Ethereum, Tron, BSC, Polygon через LayerZero, Axelar",
      icon: <Link className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Модульные блокчейны",
      description: "Возможность анализа компонентов по слоям (Execution, Data Availability, Consensus)",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-50"
    },
    {
      title: "Account Abstraction (ERC-4337)",
      description: "Мониторинг кастомных кошельков-смартов, отображение их логики и риска",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "MEV Detection & Monitoring",
      description: "Реальное время: отслеживание транзакций, front-running, аномалий через mempool",
      icon: <Search className="w-6 h-6 text-green-600" />,
      color: "bg-green-50"
    },
    {
      title: "Re-staking / EigenLayer",
      description: "Анализ вторичных стейкингов — например, если твои активы участвуют в сторонней валидации",
      icon: <Database className="w-6 h-6 text-yellow-600" />,
      color: "bg-yellow-50"
    },
    {
      title: "ZK-технологии",
      description: "Работа с контрактами zkEVM / zkRollup — распознавание и визуализация их структуры",
      icon: <Shield className="w-6 h-6 text-red-600" />,
      color: "bg-red-50"
    },
    {
      title: "Security-as-a-Service",
      description: "Интеграция с OpenZeppelin Defender, Slither и Mythril для автоматического аудита",
      icon: <Terminal className="w-6 h-6 text-teal-600" />,
      color: "bg-teal-50"
    },
    {
      title: "Маркет-мейкеры (AMM)",
      description: "Визуализация и анализ DEX-логики, пулы, формулы и торговые стратегии",
      icon: <ChartBar className="w-6 h-6 text-cyan-600" />,
      color: "bg-cyan-50"
    },
    {
      title: "Стейкинг",
      description: "Анализ смартов для локации активов, условий APY, рисков заморозки",
      icon: <Server className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-50"
    },
    {
      title: "Блокбилдеры (Block Builders)",
      description: "Отслеживание приоритизации транзакций в блоках (MEV и влияние на пользователей)",
      icon: <Code className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {technologies.map((tech, index) => (
        <TechnologyCard key={index} {...tech} />
      ))}
    </div>
  );
};

export default TechnologiesGrid;
