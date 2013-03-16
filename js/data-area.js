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
