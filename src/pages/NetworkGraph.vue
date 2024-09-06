<template>
  <div>
    <h1>Network Graph</h1>
    <div ref="graph" class="graph-container"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as d3 from 'd3'

// Create a reference for the graph container
const graph = ref(null)

onMounted(() => {
  // D3.js code for network graph
  const width = 600
  const height = 400

  const svg = d3.select(graph.value).append('svg').attr('width', width).attr('height', height)

  // Sample data
  const nodes = [{ id: 'A' }, { id: 'B' }, { id: 'C' }, { id: 'D' }]

  const links = [
    { source: 'A', target: 'B' },
    { source: 'A', target: 'C' },
    { source: 'B', target: 'D' },
    { source: 'C', target: 'D' }
  ]

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(100)
    )
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))

  const link = svg
    .append('g')
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke', '#999')
    .attr('stroke-width', 2)

  const node = svg
    .append('g')
    .selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', 10)
    .attr('fill', '#69b3a2')

  const label = svg
    .append('g')
    .selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .text((d) => d.id)
    .attr('font-size', 12)
    .attr('dx', 12)
    .attr('dy', 4)

  simulation.on('tick', () => {
    link
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)

    node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)

    label.attr('x', (d) => d.x).attr('y', (d) => d.y)
  })
})
</script>

<style scoped>
.graph-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
