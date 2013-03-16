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