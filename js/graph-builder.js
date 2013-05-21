// Create and render a line graph.
var lineGraph = glimpse.graphBuilder().create('line')
  .data(lineDataConfig)
  .render('#gb-line');

var areaGraph = glimpse.graphBuilder.create('area')
  .data(areaDataConfig)
  .render('#gb-area');

var stackedGraph = glimpse.graphBuilder.create('stacked-area')
  .config({
    'forceY': [0, 100],
    'yDomainModifier': 1
  })
  .data(areaDataConfig)
  .render('#gb-stacked-area');

// Generate more semi-random test data.
function generateDataset() {
  var cnt = generateDataset.cnt = generateDataset.cnt ? generateDataset.cnt + 1 : 1;
  return {
    id: 'more' + cnt,
    title: 'More Data ' + cnt,
    dimensions: {
      x: 'time',
      y: function(d) {
        return d.latency + cnt * 2;
      }
    },
    data: sampleData[0].data
  };
}

// attach click handler
document.getElementById('add')
  .addEventListener('click', addDataset, false);

var sampleData = [
  {
    data: [
      {"time":epochBaseMs + 0 * oneDayMs,"latency": 10},
      {"time":epochBaseMs + 1 * oneDayMs,"latency": 28},
      {"time":epochBaseMs + 2 * oneDayMs,"latency": 20},
      {"time":epochBaseMs + 3 * oneDayMs,"latency": 26},
      {"time":epochBaseMs + 4 * oneDayMs,"latency": 10}
    ]
  }
];

 // Configure initial data to show.
var dataConfig = [
  {
    id: 'latencySf',
    title: 'Time to Connect (SF)',
    data: sampleData[0].data,
    dimensions: {
      x: 'time',
      y: 'latency'
    }
  }
];

// Create and render a line graph.
var lineGraphAdd = glimpse.graphBuilder().create('line')
  .data(dataConfig)
  .render('#gb-add');

function addDataset() {
  var dataCollection;
  dataCollection = lineGraphAdd.data();
  dataCollection.add(generateDataset());
  lineGraphAdd.update();
};
