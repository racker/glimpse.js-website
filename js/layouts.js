var layoutOne = glimpse.graph()
  .data(lineDataConfig)
  .component({ type: 'line', dataId: 'latencyDfw'})
  .render('#layout-one');

var layoutTwo = glimpse.graph()
  .config({
    layout: {
      name: 'gl-vgroup',
      split: [70, 30],
      children: [
        {
          name: 'gl-main',
          border: 1,
          borderColor: '#999',
          backgroundColor: '#fff'
        },
        {
          padding: 10,
          name: 'gl-info',
          'class': 'mygraph'
        }
      ]
    }
  })
  .legend({layout: 'horizontal', position: 'center'})
  .data(lineDataConfig)
  .component({ type: 'line', dataId: 'latencyDfw'  })
  .render('#layout-two');

var layoutThree = glimpse.graph()
  .config({
    layout: {
      name: 'gl-hgroup',
      split: [70, 30],
      children: [
        {
          name: 'gl-main',
          border: 1,
          borderColor: '#999',
          backgroundColor: '#fff'
        },
        {
          padding: 1,
          paddingBottom: 10,
          'class': 'mygraph',
          name: 'gl-info'
        }
      ]
    }
  })
  .legend({layout: 'vertical', position: 'center'})
  .data(lineDataConfig)
  .component({ type: 'line', dataId: 'latencyDfw'  })
  .render('#layout-three');
