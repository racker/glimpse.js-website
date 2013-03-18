var config = {
  width: 700,
  height: 250,
  forceY: [0]
};

var myGraph = glimpse.graphBuilder().create('line')
  .data(lineDataConfig);

myGraph.config('height', 150);
myGraph.height(150);

myGraph.config({
  width: 600,
  height: 200
});

var myComponent = myGraph.component('latencyOrd');
myComponent.config('color', 'red');
myComponent.color('green');

myComponent.config();

