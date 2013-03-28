//Component Show/Hide
var toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', toggle, false);

var componentSampleData = [
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

var componentDataConfig = [
  {
    id: 'latencyOrd',
    title: 'Time to Connect (ORD)',
    data: appendDataSampleData[0].data,
    dimensions: { x: 'time', y: 'latency' }
  }
];

var componentGraph = glimpse.graphBuilder.create('line')
  .config({
    domainIntervalUnit: d3.time.week,
  })
  .data(appendDataConfig)
  .render('#component-show-hide');


function toggle() {
  var component = componentGraph.component('latencyOrd');
  if (toggleBtn.innerHTML === 'Hide') {
    toggleBtn.innerHTML = 'Show'
    component.hide();
  } else {
    toggleBtn.innerHTML = 'Hide'
    component.show();
  }

}

//Label
var labelGraph = glimpse.graph()
  .config(config)
  .data(componentDataConfig)
  .component({
    type:'label',
    text:'New label',
    position: 'center-left',
    target: 'gl-footer',
    color: 'red'
  })
  .render('#label-add');

//Axis
var axisGraph = glimpse.graph()
  .config(config)
  .data(lineDataConfig)
  .component({
    type:'axis',
    axisType: 'y',
    scale: d3.scale.linear(),
    ticks: 4,
    unit: 'ms',
    position: 'center-right',
    target: 'gl-main',
  })
  .render('#axis-add');


//Legend
var legendGraph = glimpse.graph()
  .config(config)
  .data(lineDataConfig)
  .component({
    type:'legend',
    keys: [
        {color: "red",label: "Foo"},
        {color: "green",label: "FooFoo"},
      ],
      target: 'gl-info'
  })
  .render('#legend-add');




