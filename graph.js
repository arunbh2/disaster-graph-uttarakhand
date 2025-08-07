/*
 * This script defines the data structure for the interactive network and
 * configures the vis-network instance. Nodes are grouped into categories
 * (hazards, organisations, systems/apps, infrastructure, projects, outcomes
 * and community) that are given distinct colours and shapes. Edges encode
 * relationships such as development, implementation, data flow, risk
 * reduction and community impact. Drag nodes to explore the graph.
 */

// Define nodes with an identifier, label and group. Groups correspond
// to categories shown in the legend and define colour and shape via the
// options below.
const nodes = new vis.DataSet([
  // Hazard nodes
  { id: 'earthquake', label: 'Earthquake', group: 'hazard', title: 'Seismic hazards common in Uttarakhand' },
  { id: 'flood', label: 'Flood', group: 'hazard', title: 'Flash floods and riverine floods' },
  { id: 'landslide', label: 'Landslide', group: 'hazard', title: 'Rain‑induced and seismic landslides' },
  { id: 'cloudburst', label: 'Cloudburst', group: 'hazard', title: 'Sudden, intense rainfall events' },
  // Organisation nodes
  { id: 'usdma', label: 'USDMA', group: 'organisation', title: 'Uttarakhand State Disaster Management Authority (nodal authority)' },
  { id: 'ndma', label: 'NDMA', group: 'organisation', title: 'National Disaster Management Authority (policies & guidance)' },
  { id: 'iitroorkee', label: 'IIT Roorkee', group: 'organisation', title: 'Indian Institute of Technology Roorkee (research & development)' },
  // System / App nodes
  { id: 'ueews', label: 'UEEWS', group: 'system', title: 'Uttarakhand State Earthquake Early Warning System' },
  { id: 'bhudev', label: 'Bhudev App', group: 'system', title: 'Mobile app providing earthquake warnings' },
  { id: 'ews_generic', label: 'Early Warning Systems', group: 'system', title: 'General multi‑hazard early warning systems' },
  // Infrastructure nodes
  { id: 'sensors', label: 'Sensors (Accelerometers)', group: 'infrastructure', title: 'Seismic sensors/accelerometers capturing ground motion' },
  { id: 'sirens', label: 'Sirens', group: 'infrastructure', title: 'Public siren units for alert dissemination' },
  { id: 'server', label: 'Central Server', group: 'infrastructure', title: 'Server receiving sensor data and issuing alerts' },
  { id: 'air', label: 'All India Radio', group: 'infrastructure', title: 'Broadcast channel for warnings in remote areas' },
  { id: 'bridges', label: 'Bridges & Infrastructure', group: 'infrastructure', title: 'Resilient bridges, roads and buildings' },
  // Project / initiative nodes
  { id: 'recovery', label: 'Disaster Recovery Project', group: 'project', title: 'Uttarakhand Disaster Recovery Project (World Bank supported)' },
  { id: 'geoplatform', label: 'Geospatial Platform & Risk Assessment', group: 'project', title: 'Platform & statewide multi‑hazard risk assessment' },
  { id: 'capacity', label: 'Capacity Building & Training', group: 'project', title: 'Training & institutional strengthening (e.g. SDRF)' },
  // Outcome / process nodes
  { id: 'risk_reduction', label: 'Risk Reduction & Resilience', group: 'outcome', title: 'Reducing disaster risk and improving resilience' },
  // Community node
  { id: 'community', label: 'Communities & Residents', group: 'community', title: 'People living in hazard‑prone areas' }
]);

// Define edges between nodes with optional labels. Labels describe the
// relationship; they appear on hover for clarity. Arrows indicate the
// direction of influence or data flow.
const edges = new vis.DataSet([
  // Governance & development relationships
  { from: 'ndma', to: 'usdma', label: 'guides', title: 'NDMA provides national guidance to USDMA' },
  { from: 'usdma', to: 'ueews', label: 'implements', title: 'USDMA implements UEEWS for the state' },
  { from: 'iitroorkee', to: 'ueews', label: 'develops', title: 'IIT Roorkee developed UEEWS and Bhudev' },
  { from: 'usdma', to: 'recovery', label: 'leads', title: 'USDMA leads the Disaster Recovery Project' },
  // Disaster Recovery Project relationships
  { from: 'recovery', to: 'bridges', label: 'constructs', title: 'Project built bridges, roads & resilient infrastructure' },
  { from: 'recovery', to: 'geoplatform', label: 'establishes', title: 'Project established geospatial platform & risk assessment' },
  { from: 'recovery', to: 'capacity', label: 'strengthens', title: 'Project strengthened institutions & training' },
  // System relationships: sensors and data flow
  { from: 'ueews', to: 'sensors', label: 'uses', title: 'UEEWS uses seismic sensors to detect quakes' },
  { from: 'sensors', to: 'server', label: 'transmits data', title: 'Sensors send ground‑motion data to the server' },
  { from: 'server', to: 'sirens', label: 'triggers', title: 'Server triggers public sirens when thresholds are met' },
  { from: 'server', to: 'bhudev', label: 'alerts', title: 'Server sends alerts to Bhudev mobile app' },
  { from: 'bhudev', to: 'community', label: 'warns', title: 'App warns communities with beep & notification' },
  { from: 'sirens', to: 'community', label: 'warns', title: 'Sirens warn communities to seek safety' },
  { from: 'air', to: 'community', label: 'broadcasts', title: 'All India Radio broadcasts warnings where there is no mobile connectivity' },
  // Hazard monitoring relationships
  { from: 'earthquake', to: 'ueews', label: 'monitored by', title: 'UEEWS monitors earthquakes' },
  { from: 'earthquake', to: 'bhudev', label: 'alerts via', title: 'Bhudev app provides earthquake alerts' },
  { from: 'earthquake', to: 'sirens', label: 'alerts via', title: 'Sirens provide earthquake alerts' },
  { from: 'flood', to: 'ews_generic', label: 'monitored by', title: 'Flood warnings are issued through early warning systems' },
  { from: 'landslide', to: 'ews_generic', label: 'monitored by', title: 'Landslide warnings come from various early warning systems' },
  { from: 'cloudburst', to: 'ews_generic', label: 'monitored by', title: 'Cloudburst alerts issued through meteorological EWS' },
  { from: 'ews_generic', to: 'community', label: 'warns', title: 'Early warning systems alert the community' },
  // Risk reduction & resilience relationships
  { from: 'ueews', to: 'risk_reduction', label: 'enables', title: 'UEEWS contributes to risk reduction and resilience' },
  { from: 'recovery', to: 'risk_reduction', label: 'enhances', title: 'Recovery Project enhances resilience' },
  { from: 'geoplatform', to: 'risk_reduction', label: 'supports', title: 'Risk assessments support resilience planning' },
  { from: 'capacity', to: 'risk_reduction', label: 'improves', title: 'Capacity building improves resilience' },
  { from: 'risk_reduction', to: 'community', label: 'protects', title: 'Risk reduction measures protect communities' }
]);

// Set up the network
const container = document.getElementById('network');
const data = { nodes: nodes, edges: edges };
const options = {
  layout: {
    improvedLayout: true,
    hierarchical: false
  },
  physics: {
    stabilization: true,
    solver: 'barnesHut'
  },
  nodes: {
    shape: 'dot',
    size: 16,
    font: { size: 12, color: '#2c3e50' }
  },
  groups: {
    hazard: { color: { background: '#e74c3c', border: '#c0392b' }, shape: 'ellipse' },
    organisation: { color: { background: '#3498db', border: '#2980b9' }, shape: 'box' },
    system: { color: { background: '#9b59b6', border: '#8e44ad' }, shape: 'ellipse' },
    infrastructure: { color: { background: '#1abc9c', border: '#16a085' }, shape: 'circle' },
    project: { color: { background: '#f39c12', border: '#e67e22' }, shape: 'box' },
    outcome: { color: { background: '#2ecc71', border: '#27ae60' }, shape: 'hexagon' },
    community: { color: { background: '#95a5a6', border: '#7f8c8d' }, shape: 'ellipse' }
  },
  edges: {
    arrows: {
      to: { enabled: true, scaleFactor: 0.6 }
    },
    smooth: {
      enabled: true,
      type: 'dynamic'
    },
    color: { color: '#7f8c8d', highlight: '#2c3e50' },
    font: { size: 10, color: '#2c3e50', align: 'middle' }
  },
  interaction: {
    hover: true,
    tooltipDelay: 100,
    dragNodes: true,
    zoomView: true,
    dragView: true
  }
};

// Create the network instance
const network = new vis.Network(container, data, options);