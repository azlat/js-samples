var PirateNetwork = function() {};

PirateNetwork.getPoint = function(opt_index) {
  if (opt_index == null) {
    opt_index = Math.floor(Math.random() * PirateNetwork.points.length);
  }
  var connections = PirateNetwork.connections[opt_index];

  var newIndex = connections[Math.floor(Math.random() * connections.length)];
  var newPoint = PirateNetwork.points[newIndex];
  var variance = PirateNetwork.variance[newIndex];
  var lat =
    newPoint[0] + PirateNetwork.lerp(-variance[0], variance[0], Math.random());
  var lng =
    newPoint[1] + PirateNetwork.lerp(-variance[1], variance[1], Math.random());

  return {
    index: newIndex,
    latLng: new google.maps.LatLng(lat, lng)
  };
};

PirateNetwork.lerp = function(a, b, t) {
  return a + t * (b - a);
};

PirateNetwork.points = [
  [50.986099, 1.40625],
  [48.980217, -7.075195],
  [55.078367, 5.932617],
  [64.225493, 0.527344],
  [46.118942, -12.546387],
  [45.890008, -1.757813],
  [43.739352, -8.272705],
  [38.736946, -27.674561],
  [36.826875, -54.382324],
  [32.373003, -64.805603],
  [29.563902, -78.494568],
  [47.546872, -26.015625],
  [44.339565, -38.056641],
  [46.739861, -58.007813],
  [59.344395, -7.053223],
  [57.539417, -45.32959],
  [56.824933, -19.105225],
  [60.780619, -64.248047],
  [61.814664, -11.777344],
  [62.835089, -20.522461],
  [63.685248, -21.928711],
  [76.388142, 2.900391],
  [79.647774, 10.415039],
  [23.850674, -79.436646],
  [23.211058, -82.408447],
  [29.094577, -89.802246],
  [19.337062, -95.913391],
  [22.857195, -85.825195],
  [16.167197, -86.033936],
  [20.635676, -73.956158],
  [19.098458, -68.189392],
  [18.570491, -66.130829],
  [18.338884, -62.979126],
  [19.590844, -46.142578],
  [36.544949, -6.503906],
  [28.700225, -16.270752],
  [11.808211, -69.625854],
  [39.368279, -69.213867],
  [6.424484, -54.316406],
  [-1.098565, -20.917969],
  [0.747049, 7.349854],
  [3.294082, -7.866211],
  [7.449624, -16.391602],
  [15.029686, -22.763672],
  [21.453069, -38.759766],
  [1.296276, -20.148926],
  [-24.726875, -31.860352],
  [-38.61687, -41.220703],
  [-35.60372, -55.854492],
  [-58.813742, -58.710938],
  [24.800137, -76.332579],
  [-55.153766, -87.75879],
  [-12.168226, -77.277832],
  [-36.79169, -73.54248],
  [-27.019984, -109.160156],
  [-17.439751, -149.408569],
  [-19.963023, -180],
  [-7.885147, -180],
  [18.479609, -124.541016],
  [20.427013, -155.192871],
  [20.715015, -106.040039],
  [37.749001, -122.585449],
  [37.405074, -180],
  [7.362467, -81.057129],
  [59.883425, -148.52417],
  [48.487486, -124.694824],
  [-68.628235, -75.343],
  [-76.880775, -158.73047],
  [-43.96119, -176.132813],
  [-42.488302, -180],
  [-15.913791, -5.635986],
  [-34.261757, 18.347168],
  [-37.03764, 20.654297],
  [-32.417066, 36.826172],
  [-16.256867, 42.93457],
  [-38.410558, 30.322266],
  [-36.668419, 79.277344],
  [-22.593726, 104.501953],
  [-7.362467, 103.447266],
  [-43.802819, 146.755371],
  [11.18918, 53.55835],
  [-2.635789, 44.121094],
  [7.754537, 60.336914],
  [19.165924, 72.663574],
  [8.407168, 76.860352],
  [6.053161, 80.123291],
  [-39.266284, 144.008789],
  [-44.719467, 167.424014],
  [-37.09024, 174.19922],
  [-59.94984, 148.54094],
  [-61.606396, 180],
  [-71.80141, -101.777344],
  [-33.596319, 171.331787],
  [-33.760882, 151.523438],
  [-20.097206, 163.520508],
  [-9.860628, 142.44873],
  [-34.079962, 151.73217],
  [-45.521744, 147.96386],
  [-41.046217, 66.005859],
  [-53.014783, 153.63281],
  [-4.981505, 124.650879],
  [-13.175771, 113.466797],
  [-40.178873, 79.365234],
  [-39.943436, 23.378906],
  [-5.812757, 106.633301],
  [-2.416276, 107.116699],
  [-3.682757, 117.633301],
  [-43.325178, 85.605469],
  [-24.527135, -31.552734],
  [16.299051, -22.5],
  [19.725342, 180],
  [20.361499, 113.994141],
  [2.635789, 105.908203],
  [7.885147, 103.886719],
  [31.877558, 129.550781],
  [7.623887, 111.005859],
  [3.447625, 120.322266],
  [4.390229, 130.693359],
  [20.303418, 123.134766],
  [0.087891, 140.625],
  [34.524661, 139.658203],
  [-12.21118, 127.529297],
  [31.278551, 122.431641],
  [39.232253, 123.706055],
  [16.804541, 180],
  [21.238182, -157.939453],
  [34.651285, 139.037476],
  [13.923404, 111.708984],
  [4.127285, 107.226563],
  [-3.940981, 109.852295],
  [-8.461506, 100.491943],
  [0.263671, 130.957031],
  [50.176898, 156.445313],
  [48.930738, -179.912109],
  [56.14555, -151.96289],
  [53.981935, -134.428711],
  [48.487486, -126.914063],
  [25.601902, -97.1521],
  [29.907329, -85.847168],
  [23.503552, -82.177734],
  [25.165173, -79.903564],
  [34.506557, -76.003418],
  [11.974845, -61.644287],
  [35.995785, -6.086426],
  [44.840291, -39.199219],
  [48.69096, -23.466797],
  [2.635789, -26.71875]
];

PirateNetwork.connections = [
  [2],
  [0, 5],
  [3],
  [14, 15, 21, 22],
  [1, 44],
  [4, 6, 11],
  [4],
  [4, 6, 34],
  [4, 6, 7],
  [7, 8, 29],
  [7, 8, 9, 23, 141],
  [1, 44, 144],
  [145, 17],
  [12, 37],
  [16, 18],
  [6, 14],
  [11],
  [15],
  [3, 16, 19, 20],
  [8],
  [19],
  [14, 22],
  [14],
  [24],
  [25, 27],
  [26],
  [137],
  [26],
  [27],
  [23, 50],
  [9, 29, 36],
  [29, 30],
  [29, 30, 31],
  [32],
  [33, 35],
  [32, 33, 143],
  [28, 142],
  [8, 10, 13],
  [8, 39],
  [40, 46],
  [41],
  [42],
  [43],
  [35],
  [45],
  [70],
  [47, 71],
  [40, 48, 49, 72],
  [49],
  [51, 66, 69],
  [23],
  [52, 54, 55],
  [53, 57, 58],
  [54, 57],
  [55, 58],
  [56, 67],
  [79, 95],
  [63, 95, 96],
  [59, 61, 60],
  [64, 110],
  [62],
  [62],
  [126],
  [56, 59, 91, 110],
  [65],
  [62],
  [56],
  [68],
  [69],
  [99],
  [71],
  [75],
  [73],
  [74, 78],
  [81, 82],
  [76, 77, 78],
  [77, 78, 79, 86],
  [101, 107],
  [104, 107],
  [87],
  [83],
  [80],
  [84, 85],
  [82],
  [85],
  [77],
  [88],
  [88, 89],
  [92],
  [90],
  [91],
  [47],
  [93, 94],
  [94],
  [95],
  [100, 101],
  [97],
  [98],
  [103],
  [71, 97, 98],
  [121],
  [78, 102, 103],
  [89, 103],
  [74, 108],
  [105, 106],
  [112],
  [116],
  [87, 90],
  [146],
  [35],
  [126, 131],
  [114],
  [113, 115],
  [115],
  [122, 124],
  [111, 114],
  [111, 117],
  [118, 119],
  [114, 120],
  [57],
  [124],
  [72, 103],
  [123],
  [117],
  [52, 125],
  [58],
  [127],
  [128],
  [129],
  [130],
  [103],
  [132],
  [120, 133],
  [134],
  [64, 135],
  [65, 136],
  [58, 59],
  [138],
  [139],
  [140],
  [10],
  [13],
  [35],
  [33],
  [13],
  [5],
  [4, 109]
];

PirateNetwork.variance = [
  [0, 0],
  [0, 0],
  [0, 0],
  [2, 2],
  [1, 1],
  [0, 0],
  [0, 0],
  [1, 1],
  [0, 0],
  [0, 0],
  [0, 0],
  [1, 2.5],
  [1.5, 2],
  [0, 0],
  [0.5, 0.5],
  [0, 0],
  [0, 0],
  [0, 0],
  [2, 2],
  [1, 1],
  [0, 0],
  [3, 3],
  [0, 0],
  [0.05, 0.05],
  [0, 0],
  [0.3, 0.3],
  [0.3, 0.3],
  [0, 0],
  [0, 0],
  [0.01, 0.01],
  [0, 0],
  [0, 0],
  [0, 0],
  [1, 1],
  [0, 0],
  [0.3, 0.3],
  [0, 0],
  [1, 1],
  [0.3, 0.3],
  [0, 0],
  [1.5, 1.5],
  [0, 0],
  [0, 0],
  [0, 0],
  [2, 2],
  [0, 0],
  [1, 1],
  [0.7, 0.7],
  [0, 0],
  [0.5, 0.5],
  [0, 0],
  [1, 1],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [2, 0],
  [2, 0],
  [0.3, 1],
  [0.2, 0.2],
  [0, 0],
  [0.1, 0.1],
  [3, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [4, 2.5],
  [4, 0],
  [1, 1],
  [0, 0],
  [0, 0],
  [0, 0],
  [0.6, 0.4],
  [0, 0],
  [1, 1],
  [2, 2],
  [0.7, 0.7],
  [0, 0],
  [0.8, 0.8],
  [1, 1],
  [2, 2],
  [0, 0],
  [0.02, 0.02],
  [0.01, 0.01],
  [0.3, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [3, 0],
  [0.2, 0.2],
  [0.4, 0.3],
  [0, 0],
  [0.4, 0.4],
  [0, 0],
  [0, 0],
  [0, 0],
  [1, 1],
  [0, 0],
  [0.5, 0.5],
  [1, 1],
  [1, 1],
  [0.5, 0.5],
  [0, 0],
  [0, 0],
  [0, 0],
  [0.3, 0.3],
  [2, 2],
  [0, 0],
  [2, 0],
  [0, 0],
  [0, 0],
  [0.6, 0.6],
  [0.25, 0.25],
  [0.2, 0.2],
  [0, 0],
  [0, 0],
  [0.4, 0.4],
  [0.6, 1],
  [0, 0],
  [0, 0],
  [0.6, 0.3],
  [0, 0],
  [4, 0],
  [0, 0],
  [0, 0],
  [0.8, 0.8],
  [0, 0],
  [0, 0],
  [0.8, 0.8],
  [0, 0],
  [0, 0],
  [3, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0.1, 0.1],
  [0.2, 0.3],
  [0.2, 0.2],
  [0.2, 0.2],
  [0, 0],
  [0, 0],
  [0, 0],
  [1, 2],
  [1, 2.5],
  [3, 3]
];
