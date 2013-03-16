// Create and render a line graph.
var lineGraph = glimpse.graphBuilder().create('line')
  .data(lineDataConfig)
  .render('#gb-line');

var areaGraph = glimpse.graphBuilder.create('area')
  .data(areaDataConfig)
  .render('#gb-area');
