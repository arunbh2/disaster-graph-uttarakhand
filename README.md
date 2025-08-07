# Uttarakhand Disaster Resilience & Early Warning Knowledge Graph

This repository contains a small, self‑contained web site that visualises the
relationships among hazards, institutions, early warning systems, projects and
infrastructure related to disaster risk reduction in Uttarakhand, India.  The
graph draws on publicly available information, including news reports and
research papers, to map how the **Uttarakhand State Disaster Management
Authority (USDMA)**, **IIT Roorkee**, the **Uttarakhand State Earthquake Early
Warning System (UEEWS)** and related initiatives work together to protect
communities from earthquakes, floods, landslides and cloudburst events.

The interactive network uses the open‑source
[`vis-network`](https://visjs.org/) library.  Nodes are coloured according to
their type:

| Colour | Type                | Examples                                 |
|-------:|---------------------|-------------------------------------------|
| 🔴 red | **Hazard**          | earthquake, flood, landslide, cloudburst  |
| 🔵 blue| **Organisation**    | USDMA, NDMA, IIT Roorkee                   |
| 🟣 purple | **System / App**  | UEEWS, Bhudev mobile app, generic EWS     |
| 🟢 green | **Infrastructure** | sensors, sirens, central server, bridges  |
| 🟠 orange| **Project**        | Disaster Recovery Project, risk assessment|
| 🟩 light green | **Outcome** | risk reduction & resilience               |
| ⚪ grey | **Community**       | communities & residents                   |

## How to run locally

1. Clone or download this repository.
2. Serve the files using any static file server (e.g. Python’s `http.server`).
   For example, from within the `disaster_graph` directory run:

   ```bash
   python -m http.server 8000
   ```

3. Open `http://localhost:8000/index.html` in your web browser.  You can drag
   nodes to rearrange the network and use your mouse wheel to zoom in or out.

Alternatively, you can host the repository on **GitHub Pages** by pushing the
contents of the `disaster_graph` folder to a GitHub repository and enabling
Pages from the repository settings (choose the main branch and the `/` root
folder).  GitHub Pages will serve `index.html` as the landing page.

## Data sources

The relationships represented in the graph are based on open‑source
information.  Key sources include:

* **Times of India** reports describing the regional earthquake early warning
  system developed by IIT Roorkee and USDMA.  The articles note that
  84 sensors (out of a planned 1 100) had been installed in quake‑prone areas
  and that a mobile application would alert users via a unique beep; areas
  without mobile coverage would be served by All India Radio【270580381531938†L40-L59】.

* **Times of India** article on the *Bhudev* app, India’s first app‑based
  earthquake early warning system, where officials explained that 169 sensors
  and 112 sirens had already been installed and that another 500 sensors and
  1 000 sirens would be added to expand coverage to high‑risk districts such
  as Dehradun, Haridwar–Rishikesh and Chamoli【562488657515691†L165-L183】.

* **World Bank** coverage of the *Uttarakhand Disaster Recovery Project*
  highlighting how the project built more than 80 bridges, reconstructed
  resilient homes and roads and strengthened the disaster management
  institutions of the state, including creating a geospatial platform for
  statewide multi‑hazard risk assessment【898961771599429†L431-L449】.

* A **peer‑reviewed case study** of the *Uttarakhand State Earthquake Early
  Warning System* documenting that it consists of approximately 170
  accelerometers installed in seismogenic areas, transmits ground‑motion data
  to a central server around the clock and issues warnings via a mobile app
  and siren units【92380564911551†L200-L214】.

These references are cited in the `index.html` footer.  Other nodes and
relationships, such as flood and landslide early warning systems or general
multi‑hazard risk reduction principles, represent commonly reported concepts
in disaster risk reduction.

## Contributing

Contributions are welcome!  You can extend the graph with additional nodes,
update relationships or incorporate more detailed data (e.g. sensor locations
or historical disaster events).  Pull requests that include references to
reputable sources are encouraged.