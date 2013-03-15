var epochBaseMs,
  oneDayMs,
  latencyData,
  currentDay,
  data;

epochBaseMs = new Date().getTime();
oneDayMs = 1000 * 60 * 60 * 24;

latencyData = [
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

data = [
  {
    id: 'latencyDfw',
    title: 'Time to Connect (DFW)',
    data: latencyData[0].data,
    dimensions: {
      x: function (d, i) { return d.time + 5; },
      y: function (d, i) { return d.latency + 10; }
    }
  },
  {
    id: 'latencyOrd',
    title: 'Time to Connect (ORD)',
    data: latencyData[0].data,
    dimensions: {
      x: 'time',
      y: 'latency'
    }
  },
  { id: 'latencyLon',
      title: 'Time to Connect (LON)',
      data: latencyData[0].data,
      dimensions: {
        x: function (d, i) { return d.time; },
        y: function (d, i) { return d.latency + Math.random()*50; }
      }
  },
  {
    id: 'stats',
    sources: ['*', '$domain'],
    derivation: function(sources, domain) {
      var xDomain = domain.get()['x'],
          points = sources.filter('x', xDomain).dim('y').concat();
      return {
        min: points.min().round().get(),
        max: points.max().round().get(),
        avg: points.avg().round().get()
      };
    }
  }
];