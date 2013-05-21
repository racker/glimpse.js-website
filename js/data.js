//Area data
var sampleAreaData = [
  { "ts": 1317279600000, "sys": 30, "user": 20, "stolen": 1, "wait": 9, "idle": 40},
  { "ts": 1317695968421, "sys": 31, "user": 19, "stolen": 1, "wait": 9, "idle": 40},
  { "ts": 1318112336842, "sys": 30, "user": 21, "stolen": 0, "wait": 9, "idle": 40},
  { "ts": 1318528705263, "sys": 30, "user": 21, "stolen": 0, "wait": 9, "idle": 40},
  { "ts": 1318945073684, "sys": 40, "user": 21, "stolen": 0, "wait": 9, "idle": 30},
  { "ts": 1319361442105, "sys": 30, "user": 21, "stolen": 0, "wait": 9, "idle": 40},
  { "ts": 1319777810526, "sys": 30, "user": 21, "stolen": 0, "wait": 9, "idle": 40},
  { "ts": 1320194178947, "sys": 30, "user": 21, "stolen": 0, "wait": 9, "idle": 40},
  { "ts": 1320610547368, "sys": 30, "user": 20, "stolen": 1, "wait": 9, "idle": 40},
  { "ts": 1321026915789, "sys": 10, "user": 10, "stolen": 1, "wait": 9, "idle": 70},
  { "ts": 1321443284210, "sys": 30, "user": 20, "stolen": 1, "wait": 9, "idle": 40},
  { "ts": 1321859652631, "sys": 30, "user": 20, "stolen": 1, "wait": 9, "idle": 40},
  { "ts": 1322276021052, "sys": 30, "user": 20, "stolen": 1, "wait": 9, "idle": 40}
];

var areaDataConfig = [
  { id: 'cpu-idle',
    title: 'Idle',
    data: sampleAreaData,
    dimensions: { x: 'ts', y: 'idle' }
  },
  { id: 'cpu-sys',
    title: 'System',
    data: sampleAreaData,
    dimensions: { x: 'ts', y: 'sys' }
  },
  { id: 'cpu-user',
    title: 'User',
    data: sampleAreaData,
    dimensions: { x: 'ts', y: 'user' }
  },
  { id: 'cpu-wait',
    title: 'Wait',
    data: sampleAreaData,
    dimensions: { x: 'ts', y: 'wait' }
  },
  { id: 'cpu-stolen',
    title: 'Stolen',
    data: sampleAreaData,
    dimensions: { x: 'ts', y: 'stolen' }
  }
];

//Line data
var epochBaseMs = new Date().getTime();
var oneDayMs = 1000 * 60 * 60 * 24;

var sampleLineData = [
  {
    data: [
      {"time":epochBaseMs + 0 * oneDayMs,"latency": 80},
      {"time":epochBaseMs + 1 * oneDayMs,"latency": 120},
      {"time":epochBaseMs + 2 * oneDayMs,"latency": 60},
      {"time":epochBaseMs + 3 * oneDayMs,"latency": 90},
      {"time":epochBaseMs + 4 * oneDayMs,"latency": 100}
    ]
  }
];
var lineDataConfig = [
  {
    id: 'latencyDfw',
    title: 'Time to Connect (DFW)',
    data: sampleLineData[0].data,
    dimensions: {
      x: function (d, i) { return d.time + 5; },
      y: function (d, i) { return d.latency + 10; }
    }
  },
  {
    id: 'latencyOrd',
    title: 'Time to Connect (ORD)',
    data: sampleLineData[0].data,
    dimensions: {
      x: 'time',
      y: 'latency'
    }
  },
  { id: 'latencyLon',
      title: 'Time to Connect (LON)',
      data: sampleLineData[0].data,
      dimensions: {
        x: function (d, i) { return d.time; },
        y: function (d, i) { return d.latency + Math.random()*50; }
      }
  }
];

//Append Data
document.getElementById('update')
  .addEventListener('click', update, false);
var appendDataSampleData = [
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

var currentDay = appendDataSampleData[0].data.length;

var appendDataConfig = [
  {
    id: 'latencyOrd',
    title: 'Time to Connect (ORD)',
    data: appendDataSampleData[0].data,
    dimensions: { x: 'time', y: 'latency' }
  }
];

var appendDataGraph = glimpse.graphBuilder.create('line')
  .config({
    domainIntervalUnit: d3.time.week,
  })
  .data(appendDataConfig)
  .render('#data-append');

function update() {
  appendDataGraph.data()
    .append('latencyOrd', {
      time: epochBaseMs + currentDay++ * oneDayMs,
      latency: (Math.random() * 150)
    });
  appendDataGraph.update();
}

//Derived data
// Configure which data to show.
var derivedDataConfig = [
  {
    id: 'latencyDfw',
    title: 'Time to Connect (DFW)',
    data: sampleLineData[0].data,
    dimensions: {
      x: 'time',
      y: 'latency'
    }
  },
  {
    id: 'latencyDfwROC',
    title: 'Rate of Chagne (DFW)',
    sources: 'latencyDfw',
    derivation: function(sources) {
      return sources.diffQuotient().get();
    }
  }
];

// Create and render a line graph.
var derivedData = glimpse.graphBuilder().create('line')
  .data(derivedDataConfig)
  .render('#data-derived');

