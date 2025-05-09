
import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const ArchitectureDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: [
        // Nodes
        { data: { id: 'blockchains', label: 'Blockchain Nodes\n(ETH, BSC, Tron)', type: 'source' } },
        { data: { id: 'collector', label: 'Event/Log Collector', type: 'process' } },
        { data: { id: 'parser', label: 'Parser', type: 'process' } },
        { data: { id: 'security', label: 'Security Scanner\n(Slither, Mythril)', type: 'tool' } },
        { data: { id: 'graph', label: 'Graph Builder', type: 'process' } },
        { data: { id: 'ml', label: 'ML Layer', type: 'process' } },
        { data: { id: 'gnn', label: 'GNN (структура)', type: 'subprocess' } },
        { data: { id: 'codebert', label: 'CodeBERT (риск)', type: 'subprocess' } },
        { data: { id: 'nlp', label: 'NLP (объяснение)', type: 'subprocess' } },
        { data: { id: 'zk', label: 'ZK-recognizer', type: 'process' } },
        { data: { id: 'alert', label: 'Alert/Report Layer', type: 'output' } },
        { data: { id: 'frontend', label: 'Frontend:\nReact + Cytoscape.js', type: 'output' } },
        
        // Edges
        { data: { id: 'e1', source: 'blockchains', target: 'collector', label: 'кросс-чейн сбор данных' } },
        { data: { id: 'e2', source: 'collector', target: 'parser', label: 'On-chain Monitoring, MEV' } },
        { data: { id: 'e3', source: 'parser', target: 'security' } },
        { data: { id: 'e4', source: 'parser', target: 'graph' } },
        { data: { id: 'e5', source: 'parser', target: 'ml' } },
        { data: { id: 'e6', source: 'parser', target: 'zk' } },
        { data: { id: 'e7', source: 'parser', target: 'alert' } },
        { data: { id: 'e8', source: 'ml', target: 'gnn' } },
        { data: { id: 'e9', source: 'ml', target: 'codebert' } },
        { data: { id: 'e10', source: 'ml', target: 'nlp' } },
        { data: { id: 'e11', source: 'alert', target: 'frontend' } },
        { data: { id: 'e12', source: 'graph', target: 'frontend' } },
        { data: { id: 'e13', source: 'ml', target: 'frontend' } },
        { data: { id: 'e14', source: 'zk', target: 'frontend' } },
      ],
      
      layout: {
        name: 'dagre',
        rankDir: 'TB',
        nodeSep: 80,
        rankSep: 100,
        padding: 30
      },
      
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'text-wrap': 'wrap',
            'text-max-width': '120px',
            'font-size': '11px',
            'text-valign': 'center',
            'text-halign': 'center',
            'background-color': '#fff',
            'border-width': 2,
            'border-color': '#3B82F6',
            'padding': '10px',
            'shape': 'roundrectangle',
            'width': 'label',
            'height': 'label',
            'color': '#000',
            'text-margin-y': 5
          }
        },
        {
          selector: 'node[type="source"]',
          style: {
            'border-color': '#60A5FA',
            'border-width': 3,
            'background-color': '#EFF6FF'
          }
        },
        {
          selector: 'node[type="process"]',
          style: {
            'border-color': '#3B82F6',
            'background-color': '#F0F9FF'
          }
        },
        {
          selector: 'node[type="subprocess"]',
          style: {
            'border-color': '#93C5FD',
            'border-width': 1,
            'background-color': '#F9FAFB'
          }
        },
        {
          selector: 'node[type="tool"]',
          style: {
            'border-color': '#10B981',
            'background-color': '#ECFDF5'
          }
        },
        {
          selector: 'node[type="output"]',
          style: {
            'border-color': '#1E40AF',
            'background-color': '#EFF6FF'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#94A3B8',
            'target-arrow-color': '#94A3B8',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(label)',
            'font-size': '9px',
            'text-rotation': 'autorotate',
            'text-margin-y': -10,
            'text-background-color': '#ffffff',
            'text-background-opacity': 0.7,
            'text-background-padding': '2px'
          }
        }
      ]
    });

    cyRef.current = cy;

    cy.on('tap', 'node', function(evt) {
      const node = evt.target;
      console.log('Clicked node:', node.id());
    });

    return () => {
      if (cyRef.current) {
        cyRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div ref={containerRef} className="cytoscape-container border shadow-sm"></div>
    </div>
  );
};

export default ArchitectureDiagram;
