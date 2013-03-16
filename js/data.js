var singleLineGraph = lineGraph = glimpse.graph()
  .config(config)
  .data(lineDataConfig)
  .component({ cid: 'lineOrd', type: 'line', dataId: 'latencyOrd'})
  .render('#line-single');

var dataCollection;
dataCollection = myGraph.data();
dataCollection.add(newDataSet);
myGraph.update();

myGraph.data().append(
    'latencyOrd',
    {
      time: epochBaseMs + currentDay++ * oneDayMs,
      latency: (Math.random() * 150)
    });
myGraph.update();