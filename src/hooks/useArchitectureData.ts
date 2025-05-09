
import { useState, useEffect } from 'react';

export type ArchitectureNode = {
  id: string;
  label: string;
  type: string;
};

export type ArchitectureEdge = {
  id: string;
  source: string;
  target: string;
  label?: string;
};

export type ArchitectureData = {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
};

export const useArchitectureData = () => {
  const [data, setData] = useState<ArchitectureData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const architectureData: ArchitectureData = {
        nodes: [
          { id: 'blockchains', label: 'Blockchain Nodes\n(ETH, BSC, Tron)', type: 'source' },
          { id: 'collector', label: 'Event/Log Collector', type: 'process' },
          { id: 'parser', label: 'Parser', type: 'process' },
          { id: 'security', label: 'Security Scanner\n(Slither, Mythril)', type: 'tool' },
          { id: 'graph', label: 'Graph Builder', type: 'process' },
          { id: 'ml', label: 'ML Layer', type: 'process' },
          { id: 'gnn', label: 'GNN (структура)', type: 'subprocess' },
          { id: 'codebert', label: 'CodeBERT (риск)', type: 'subprocess' },
          { id: 'nlp', label: 'NLP (объяснение)', type: 'subprocess' },
          { id: 'zk', label: 'ZK-recognizer', type: 'process' },
          { id: 'alert', label: 'Alert/Report Layer', type: 'output' },
          { id: 'frontend', label: 'Frontend:\nReact + Cytoscape.js', type: 'output' }
        ],
        edges: [
          { id: 'e1', source: 'blockchains', target: 'collector', label: 'кросс-чейн сбор данных' },
          { id: 'e2', source: 'collector', target: 'parser', label: 'On-chain Monitoring, MEV' },
          { id: 'e3', source: 'parser', target: 'security' },
          { id: 'e4', source: 'parser', target: 'graph' },
          { id: 'e5', source: 'parser', target: 'ml' },
          { id: 'e6', source: 'parser', target: 'zk' },
          { id: 'e7', source: 'parser', target: 'alert' },
          { id: 'e8', source: 'ml', target: 'gnn' },
          { id: 'e9', source: 'ml', target: 'codebert' },
          { id: 'e10', source: 'ml', target: 'nlp' },
          { id: 'e11', source: 'alert', target: 'frontend' },
          { id: 'e12', source: 'graph', target: 'frontend' },
          { id: 'e13', source: 'ml', target: 'frontend' },
          { id: 'e14', source: 'zk', target: 'frontend' }
        ]
      };

      setData(architectureData);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading };
};

export default useArchitectureData;
