
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ChartBar, Database, FileBarChart, Grid, Layout, Shield } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NetworkStats from "@/components/NetworkStats";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import TechnologiesGrid from "@/components/TechnologiesGrid";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">SmartGuard.AI Архитектура</h1>
                <p className="text-gray-600">Визуализация соединения ключевых технологий</p>
              </div>
              
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm">
                  <FileBarChart className="mr-2 h-4 w-4" /> Экспорт
                </Button>
                <Button size="sm">
                  <Shield className="mr-2 h-4 w-4" /> Запустить сканирование
                </Button>
              </div>
            </div>
            
            <div className="mb-6">
              <NetworkStats />
            </div>
            
            <Tabs defaultValue="architecture" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="architecture">
                  <Layout className="mr-2 h-4 w-4" /> Архитектура
                </TabsTrigger>
                <TabsTrigger value="technologies">
                  <Grid className="mr-2 h-4 w-4" /> Технологии
                </TabsTrigger>
                <TabsTrigger value="analytics">
                  <ChartBar className="mr-2 h-4 w-4" /> Аналитика
                </TabsTrigger>
                <TabsTrigger value="databases">
                  <Database className="mr-2 h-4 w-4" /> Базы данных
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="architecture" className="mt-0">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h2 className="text-lg font-medium mb-4">Архитектура системы</h2>
                  {isLoading ? (
                    <div className="flex items-center justify-center h-96">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-smartguard-primary"></div>
                    </div>
                  ) : (
                    <ArchitectureDiagram />
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="technologies" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h2 className="text-lg font-medium mb-6">Ключевые технологии</h2>
                  <TechnologiesGrid />
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center justify-center h-96">
                  <p className="text-gray-500">Раздел в разработке</p>
                </div>
              </TabsContent>
              
              <TabsContent value="databases" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center justify-center h-96">
                  <p className="text-gray-500">Раздел в разработке</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;
