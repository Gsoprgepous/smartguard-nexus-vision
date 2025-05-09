
import { useEffect } from 'react';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';

export const useCytoscapeExtensions = () => {
  useEffect(() => {
    if (!cytoscape.prototype.hasExtension('dagre')) {
      cytoscape.use(dagre);
    }
  }, []);
};

export default useCytoscapeExtensions;
