window.addEventListener('DOMContentLoaded', (e) => {
  console.log("Content fully loaded")
  console.log(buildGraphs(roads))
})

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Post Office",
  "Daria's House-Ernie's House",
  "Ernie's House-Grete's House",
  "Grete's House-Shop",
  "Marketplace-Post Office",
  "Marketplace-Town Hall",
];

function buildGraphs(edges) {
  let graph = Object.create(null)
  function addEdge(from, to) {
    if(graph[from] == null) {
      graph[from] = [to]
    } else {
      graph[from].push(to)
    }
  }

  for(let [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to)
    addEdge(to, from)
  }

  return graph
}
