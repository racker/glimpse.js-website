var emptyStateGraph = glimpse.graph()
  .config({
    emptyMessage: [
    'There is no data for the selected period.',
    'Try selecting a larger span of time to locate where data begins.'
    ]
  })
  .config(config)
  .render('#state-empty')
  .state('empty');

var errorStateGraph = glimpse.graph()
  .config(config)
  .render('#state-error')
  .state('error');

var loadingStateGraph = glimpse.graph()
  .config(config)
  .render('#state-loading')
  .state('loading');

// var normalStateGraph = glimpse.graph()
//   .config(config)
//   .render('#state-normal')
//   .state('loading');

// window.setTimeout(function() {
//   normalStateGraph.data(sampleLineData)
//     .state('normal');
// }, 2000);