var singleAreaGraph = glimpse.graph()
  .config(config)
  .data(areaDataConfig)
  .component({ type: 'area', dataId: 'cpu-idle', color: '#89D6FF' })
  .render('#area-single');

var multiAreaGraph = glimpse.graph()
  .config(config)
  .data(areaDataConfig)
  .component({ type: 'area', dataId: 'cpu-idle', color: '#EFEFEF' })
  .component({ type: 'area', dataId: 'cpu-user', color: '#89D6FF' })
  .component({ type: 'area', dataId: 'cpu-sys', color: '#FFB578' })
  .component({ type: 'area', dataId: 'cpu-wait', color: '#F5F692' })
  .component({ type: 'area', dataId: 'cpu-stolen', color: '#FF5A86' })
  .render('#area-multiple');

 var sampleData = [
          {
            "name": "sys",
            "values": [
              { "x": 1317279600000, "y": 30 },
              { "x": 1317695968421, "y": 31 },
              { "x": 1318112336842, "y": 30 },
              { "x": 1318528705263, "y": 30 },
              { "x": 1318945073684, "y": 40 },
              { "x": 1319361442105, "y": 30 }
            ]
          },
          {
            "name": "user",
            "values": [
              { "x": 1317279600000, "y": 20 },
              { "x": 1317695968421, "y": 19 },
              { "x": 1318112336842, "y": 21 },
              { "x": 1318528705263, "y": 21 },
              { "x": 1318945073684, "y": 21 },
              { "x": 1319361442105, "y": 21 }
            ]
          },
          {
            "name": "stolen",
            "values": [
              { "x": 1317279600000, "y": 1 },
              { "x": 1317695968421, "y": 1 },
              { "x": 1318112336842, "y": 0 },
              { "x": 1318528705263, "y": 0 },
              { "x": 1318945073684, "y": 0 },
              { "x": 1319361442105, "y": 0 }
            ]
          },
          {
            "name": "wait",
            "values": [
              { "x": 1317279600000, "y": 9 },
              { "x": 1317695968421, "y": 9 },
              { "x": 1318112336842, "y": 9 },
              { "x": 1318528705263, "y": 9 },
              { "x": 1318945073684, "y": 9 },
              { "x": 1319361442105, "y": 9 }
            ]
          },
          {
            "name": "idle",
            "values": [
              { "x": 1317279600000, "y": 40 },
              { "x": 1317695968421, "y": 40 },
              { "x": 1318112336842, "y": 40 },
              { "x": 1318528705263, "y": 40 },
              { "x": 1318945073684, "y": 30 },
              { "x": 1319361442105, "y": 40 }
            ]
          }
        ];

// Create copy for mutating.
var mappedData = sampleData.concat();

// d3 stack function to calculate Y-baselines and Y-offsets.
var stack = d3.layout.stack()
  .values(function(d) {
    return d.values;
  });
stack(mappedData);

// Utility for accessing individual data series.
function filterData(processName) {
  return mappedData.filter(function(d) {
    return d.name === processName;
  })[0].values;
}

var stackedArea = glimpse.graph()
  .config({
    'forceY': [0, 100],
    'yDomainModifier': 1
  })
  .data(areaDataConfig)
  .component({ type: 'area', dataId: 'cpu-idle', color: '#EFEFEF' })
  .component({ type: 'area', dataId: 'cpu-user', color: '#89D6FF' })
  .component({ type: 'area', dataId: 'cpu-sys', color: '#FFB578' })
  .component({ type: 'area', dataId: 'cpu-wait', color: '#F5F692' })
  .component({ type: 'area', dataId: 'cpu-stolen', color: '#FF5A86' })
  .render('#area-stacked');