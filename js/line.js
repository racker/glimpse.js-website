var singleLineGraph = lineGraph = glimpse.graph()
  .config(config)
  .data(lineDataConfig)
  .component({ cid: 'lineOrd', type: 'line', dataId: 'latencyOrd'})
  .render('#line-single');

var multiLineGraph = glimpse.graph()
  .config(config)
  .data(lineDataConfig)
  .component({ cid: 'lineOrd', type: 'line', dataId: 'latencyOrd'})
  .component({ cid: 'lineDfw', type: 'line', dataId: 'latencyDfw'})
  .component({ cid: 'lineLon', type: 'line', dataId: 'latencyLon'})
  .render('#line-multiple');
