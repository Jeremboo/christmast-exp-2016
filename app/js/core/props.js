import { Vector3 } from 'three'

const props = {
  // test: {
  //   x: 0.1,
  //   y: 0.9,
  //   z: 0.1,
  //   rotation: 0,
  //   scale: 2,
  // },
  loader: 0,
  rotation: {
    autoRotate: true,
    force: 100,
    vel: 0.1,
  },
  camera: {
    rotation: new Vector3(-0.3, 0, 0),
    position: new Vector3(0, 1000, 150), // y : 255
  },
  planet: {
    size: 200,
    vanishingDist: 5.0,
    endView: false,
  },
  shader: {
    ceil: 10.0,
    amplitude: 8.0
  },
  postProcess: {
    enabled: true
  },
  lightPosition: new Vector3(0.0, 1.0, 0.0),
  objects: new Map(),
  candies: [
    {
      category: 'lollipop',
      positions: [
        // First scene
        { x: 0, y: 1, z: 0.18, scale: 0.5 }, // 0.5
        { x: 0.1, y: -0.9, z: 0.1, scale: 0.5 },
        { x: 1, y: 0, z: 0, scale: 0.5 },
      ]
    },
    // {
    //   category: 'peppermint',
    //   positions: [
    //     { x: 1, y: 1, z: 1, scale: 0.5 },
    //     { x: 1, y: 1, z: 0, scale: 0.5 },
    //     { x: 1, y: 0, z: 1, scale: 0.5 },
    //   ]
    // },
    {
      category: 'stick',
      positions: [
        { x: -1, y: 0, z: 0, scale: 2 }, // 2
        { x: 0, y: 0, z: -1, scale: 2 },
        { x: 0, y: -0.05, z: 1, scale: 2 },
      ]
    },
  ],
  montains: [
    // 1.1
    { x: 0, y: 1, z: 0, scale: 7.2, rotation: 0 },
    { x: 0.21, y: 1, z: 0, scale: 4.5, rotation: -30 },
    { x: -0.21, y: 1, z: 0.15, scale: 3, rotation: 30 },
    { x: -0.15, y: 1, z: -0.06, scale: 3, rotation: 10 },
    { x: -0.18, y: 1, z: 0.06, scale: 3, rotation: -10 },
    { x: 0.03, y: 1, z: -0.5, scale: 7 },
    { x: -0.2, y: 1, z: -0.3, scale: 4 },
    { x: 0.4, y: 1, z: -0.7, scale: 4 },
    { x: -0.4, y: 1, z: -1.7, scale: 3 },
    { x: 0.43, y: 1, z: -0.4, scale: 6 },
    { x: 0.55, y: 1, z: 0.3, scale: 3 },
    { x: 0.9, y: 1, z: 0.3, scale: 7 },
    // 1.2
    { x: -0.14, y: -0.9, z: -0.45, scale: 6 },
    { x: 0.24, y: -0.9, z: -0.34, scale: 4 },
    { x: 0.06, y: -0.9, z: -0.36, scale: 4 },
    // { x: 0.14, y: -0.9, z: 0.53, scale: 6 },
    { x: -0.38, y: -0.9, z: 0.59, scale: 5 },
    { x: -0.32, y: -0.9, z: -0.1, scale: 3 },
    // 1.3
    { x: 1, y: -0.14, z: -0.45, scale: 6 },
    { x: 1, y: 0.24, z: -0.34, scale: 4 },
    { x: 1, y: 0.06, z: -0.36, scale: 4 },
    { x: 1, y: 0.14, z: 0.53, scale: 6 },
    { x: 1, y: -0.38, z: 0.59, scale: 5 },
    { x: 1, y: -0.32, z: -0.1, scale: 3 },
    // 2.1
    { x: -1, y: -0.14, z: -0.45, scale: 6 },
    { x: -1, y: 0.24, z: -0.34, scale: 4 },
    { x: -1, y: 0.06, z: -0.36, scale: 4 },
    { x: -1, y: 0.14, z: 0.53, scale: 7 },
    { x: -1, y: -0.38, z: 0.59, scale: 7 },
    { x: -1, y: -0.32, z: -0.1, scale: 7 },
    // 2.2
    { x: 0, y: -0.2, z: -1, scale: 5 },
    { x: 0.05, y: 0.3, z: -1, scale: 3 },
    // 2.3
    { x: 0, y: 0.1, z: 1.1, scale: 7, rotation: 0.1 },
    { x: 0.2, y: 0.12, z: 1.13, scale: 5, rotation: -28 },
    { x: -0.2, y: -0.05, z: 1, scale: 4, rotation: 15 },
    { x: -0.1, y: 0.07, z: 0.40, scale: 5.1, rotation: 180 },
    // Other
    { x: -0.2, y: 0.9, z: 1.13, scale: 5.1, rotation: 200 },
    { x: 0.04, y: 0.04, z: 0.091, scale: 4, rotation: 180 },
    { x: 0.04, y: 0.04, z: 0.06, scale: 5, rotation: 20 },
    { x: -0.16, y: 0.24, z: -0.9, scale: 5 },
    { x: 0, y: 0.24, z: -0.4, scale: 5 },
    { x: -0.16, y: 0.2, z: 0, scale: 5 },
  ],
  trees: [
    // 1.1
    { x: -0.12, y: 1, z: 0.3, scale: 3 },
    { x: 0.18, y: 1, z: 0.12, scale: 3 },
    { x: -0.4, y: 1, z: -1.2, scale: 3 },
    { x: -0.6, y: 1, z: -1.0, scale: 3 },
    { x: -0.8, y: 1, z: -0.5, scale: 3 },
    // 1.2
    { x: 0.08, y: -0.9, z: 0.21, scale: 2.6 },
    { x: -0.14, y: -0.9, z: -0.14, scale: 3 },
    { x: 0.8, y: -0.9, z: 0.28, scale: 2.4 },
    { x: 0.1, y: -0.9, z: -0.07, scale: 3.1 },
    { x: 0.06, y: -0.9, z: 0.3, scale: 2.1 },
    { x: -0.01, y: -0.9, z: 0.17, scale: 3 },
    { x: -0.03, y: -0.9, z: 0.12, scale: 1.5 },
    { x: 0.04, y: -0.9, z: 0.12, scale: 2.7 },
    // 1.3
    { x: 1, y: 0.08, z: 0.21, scale: 2.6 },
    { x: 1, y: -0.14, z: -0.14, scale: 3 },
    { x: 1, y: 0.8, z: 0.28, scale: 2.4 },
    { x: 1, y: 0.1, z: -0.07, scale: 3.1 },
    { x: 1, y: 0.06, z: 0.3, scale: 2.1 },
    { x: 1, y: -0.01, z: 0.17, scale: 3 },
    { x: 1, y: -0.03, z: 0.12, scale: 1.5 },
    { x: 1, y: 0.04, z: 0.12, scale: 2.7 },
    // 2.1
    { x: -1, y: 0.08, z: 0.21, scale: 2.6 },
    { x: -1, y: -0.14, z: -0.14, scale: 3 },
    { x: -1, y: 0.8, z: 0.28, scale: 2.4 },
    { x: -1, y: 0.1, z: -0.07, scale: 3.1 },
    { x: -1, y: 0.06, z: 0.3, scale: 2.1 },
    { x: -1, y: -0.14, z: 0.24, scale: 2.1 },
    // 2.2
    { x: -0.18, y: 0, z: -1, scale: 3 },
    { x: -0.09, y: 0.05, z: -1, scale: 2.5 },
    { x: -0.3, y: -0.09, z: -1, scale: 2.8 },
    // 2.3
    { x: -0.1, y: 0.14, z: 0.40, scale: 4, },
    { x: 0.01, y: -0.01, z: 0.04, scale: 6 },
    // Other
    { x: 0, y: 0.5, z: 1.1, scale: 3 },
    { x: -0.3, y: 0.6, z: 1, scale: 2.9 },
    { x: -0.32, y: -1, z: -0.04, scale: 2 },
    { x: -0.22, y: -1.1, z: -0.4, scale: 3 },
    { x: -0.32, y: -1.2, z: -0.2, scale: 3.5 },
  ],
  christmasTrees: [
    // 1.1
    { x: 0.18, y: 1, z: 0.3, scale: 3 },
    { x: 0.27, y: 1, z: 0.21, scale: 4.2 },
    { x: 0.12, y: 1, z: 0.21, scale: 2.4 },
    { x: -0.21, y: 1, z: 0.27, scale: 2.4 },
    // 1.2
    { x: 0.3, y: -0.9, z: 0.1, scale: 3 },
    { x: 0.4, y: -0.9, z: 0.4, scale: 2.4 },
    { x: 0.19, y: -0.9, z: 0.1, scale: 3.1 },
    { x: 0.24, y: -0.9, z: 0.24, scale: 1.5 },
    { x: -0.05, y: -0.9, z: 0.37, scale: 2.5 },
    { x: -0.18, y: -0.9, z: 0.28, scale: 3.0 },
    { x: -0.21, y: -0.9, z: -0.01, scale: 1.5 },
    { x: -0.32, y: -0.9, z: 0.15, scale: 1.9 },
    { x: -0.16, y: -0.9, z: 0.14, scale: 2.3 },
    { x: 0.04, y: -0.9, z: -0.18, scale: 2.9 },
    { x: 0.17, y: -0.9, z: -0.03, scale: 1.3 },
    { x: 0.17, y: -0.9, z: -0.15, scale: 1.8 },
    // 1.3
    { x: 1, y: 0.3, z: 0.1, scale: 3 },
    { x: 1, y: 0.4, z: 0.4, scale: 2.4 },
    { x: 1, y: 0.15, z: 0.1, scale: 3.1 },
    { x: 1, y: 0.24, z: 0.24, scale: 1.5 },
    { x: 1, y: -0.05, z: 0.37, scale: 2.5 },
    { x: 1, y: -0.18, z: 0.28, scale: 3.0 },
    { x: 1, y: -0.21, z: -0.01, scale: 1.5 },
    { x: 1, y: -0.32, z: 0.15, scale: 1.9 },
    { x: 1, y: -0.16, z: 0.14, scale: 2.3 },
    { x: 1, y: 0.04, z: -0.18, scale: 2.9 },
    { x: 1, y: 0.17, z: -0.03, scale: 1.3 },
    { x: 1, y: 0.17, z: -0.15, scale: 1.8 },
    // 2.1
    { x: -1, y: 0.3, z: 0.1, scale: 3 },
    { x: -1, y: 0.4, z: 0.4, scale: 2.4 },
    { x: -1, y: 0.15, z: 0.1, scale: 3.1 },
    { x: -1, y: 0.24, z: 0.24, scale: 1.5 },
    { x: -1, y: -0.05, z: 0.37, scale: 2.5 },
    { x: -1, y: -0.18, z: 0.28, scale: 3.0 },
    { x: -1, y: -0.21, z: -0.01, scale: 1.5 },
    { x: -1, y: -0.32, z: 0.15, scale: 1.9 },
    { x: -1, y: -0.16, z: 0.14, scale: 2.3 },
    { x: -1, y: 0.04, z: -0.18, scale: 2.9 },
    { x: -1, y: 0.17, z: -0.03, scale: 1.3 },
    { x: -1, y: 0.17, z: -0.15, scale: 1.8 },
    // 2.2
    { x: 0.2, y: 0.1, z: -1 },
    { x: 0.4, y: 0.14, z: -1 },
    { x: -0.2, y: -0.14, z: -1 },
    { x: -0.3, y: -0.2, z: -1 },
    { x: 0.2, y: -0.3, z: -1 },
    { x: 0.4, y: -0.34, z: -1 },
    { x: 0.2, y: 0, z: -1 },
    { x: 0.1, y: 0.03, z: -1 },
    { x: 0.1, y: -0.6, z: -1.2 },
    { x: -0.35, y: -0.2, z: -1 },
    { x: -0.39, y: -0.43, z: -1 },
    { x: -0.16, y: -0.5, z: -1 },
    { x: -0.14, y: -0.32, z: -1 },
    { x: 0.01, y: -0.51, z: -1 },
    { x: 0.1, y: -0.45, z: -1 },
    { x: 0.03, y: -0.41, z: -1 },
    { x: 0.01, y: -0.51, z: -1 },
    { x: 0.01, y: -0.71, z: -1 },
    // 2.3
    { x: -0.27, y: -0.15, z: 1 },
    { x: -0.26, y: -0.3, z: 1 },
    { x: -0.2, y: -0.37, z: 1 },
    { x: -0.23, y: -0.55, z: 1 },
    { x: -0.35, y: -0.2, z: 1 },
    { x: -0.39, y: -0.43, z: 1 },
    { x: -0.16, y: -0.5, z: 1 },
    { x: -0.14, y: -0.32, z: 1 },
    { x: 0.01, y: -0.51, z: 1 },
    { x: 0.1, y: -0.45, z: 1 },
    { x: 0.03, y: -0.41, z: 1 },
    { x: 0.01, y: -0.51, z: 1 },
    { x: 0.01, y: -0.71, z: 1 },
    // 2.3 right
    { x: 0.52, y: -0.25, z: 1 },
    { x: 0.4, y: -0.35, z: 1 },
    { x: 0.35, y: -0.1, z: 1 },
    { x: 0.43, y: -0.5, z: 1 },
    { x: 0.33, y: -0.53, z: 1 },
    { x: 0.25, y: -0.6, z: 1 },
    // 2.3 bottom
    { x: 0.3, y: -0.1, z: 0.79 },
    { x: 0.19, y: -1, z: 0.79 },
    { x: 0.1, y: -0.74, z: 0.75 },
    { x: 0.08, y: -1, z: 0.9 },
    { x: 0.25, y: -1.7, z: 0.9 },

    { x: 0.32, y: -0.2, z: -0.1 },
    { x: 0, y: -0.5, z: -0.3 },
    { x: 0.6, y: -0.9, z: -0.13 },
    { x: 0.32, y: -0.5, z: -0.5 },


    { x: -0.23, y: -0.34, z: -0.16 },
    { x: -0.33, y: -0.1, z: -0.3 },
    { x: -0.53, y: -0.5, z: -0.16 },
    { x: -0.53, y: -0.5, z: -0.5 },

    //
    { x: -1.27, y: -1.6, z: 1, scale: 2 },
    { x: -1.26, y: -1.3, z: 1, scale: 2.02 },
    { x: 0, y: -1.2, z: 0.9, scale: 2.5 },
    { x: 0, y: -1.55, z: 1, scale: 2.5 },
    { x: -1.65, y: -1.2, z: 0.59, scale: 2.7 },
    { x: -1.39, y: -1.47, z: 0.79, scale: 2.5 },
    { x: 1, y: -2, z: 0.59, scale: 1.8 },
    { x: -1.14, y: -1.72, z: 0.79, scale: 2.1 },
    { x: 1.01, y: -1.51, z: 1, scale: 1.8 },
    { x: -1.1, y: -1.45, z: 1, scale: 2.3 },
    { x: 1.2, y: 1.41, z: 1, scale: 2.6 },
    { x: 1.7, y: 1.51, z: 1, scale: 2.2 },
    { x: 1.01, y: -1.71, z: 1, scale: 3 },
  ],
  deers: [
    // 1.1
    { x: 0, y: 1, z: 0.3, scale: 3, rotation: 0 },
    // 1.2
    { x: -0.23, y: -0.9, z: 0.04, scale: 3, rotation: 270 },
    // 1.3
    { x: 1, y: -0.23, z: 0.04, scale: 4, rotation: 270 },
    // 2.1
    { x: -1, y: -0.01, z: 0.17, scale: 3, rotation: 180 },
    { x: -1, y: -0.03, z: 0.12, scale: 1.5, rotation: 175 },
    { x: -1, y: 0.04, z: 0.12, scale: 2.7, rotation: 190 },
    // 2.2
    { x: 0.02, y: 0.1, z: -1, scale: 2.7, rotation: 190 },
    { x: 0.04, y: 0.17, z: -1, scale: 2.2, rotation: 190 },
    { x: 0.05, y: 0.23, z: -1, scale: 1.5, rotation: 190 },
    // 2.3
    { x: -0.2, y: -0.9, z: -0.77, scale: 2.6, rotation: 190 },
    { x: -0.2, y: -1.1, z: -0.64, scale: 2.7, rotation: 190 },
  ],
  assets: [
    {
      name: 'christmasTree',
      ex: 'json',
      children: [
        'eye_right',
        'eye_left',
        'Cône',
        'Cône.1',
        'Cône.2',
        'tronc',
      ],
    },
    {
      name: 'tree',
      ex: 'json',
      children: [
        'branche_0',
        'branche_1',
        'branche_2',
        'branche_3',
        'branche_4',
        'branche_5',
        'branche_6',
        'Cône',
        'Cône.1',
        'Cône.2',
        'Cône.3',
        'Cône.4',
        'Cône.5',
        'Cône.6',
        'tronc',
      ],
    },
    {
      name: 'mountain',
      ex: 'json',
      children: [
        'arm_left',
        'arm_right',
        'eye_left',
        'eye_right',
        'montagne.2',
        'nez',
      ],
    },
    {
      name: 'stick',
      ex: 'json',
      children: [
        'Candy',
      ],
    },
    // {
    //   name: 'peppermint',
    //   ex: 'json',
    //   children: [
    //     'Cylindre',
    //   ],
    // },
    {
      name: 'lollipop',
      ex: 'json',
      children: [
        'Arrondi.001',
        'Couvercle:1.001',
        'Couvercle:2.001',
        'Cylindre',
        'Extrusion:contr\u00f4l\u00e9e.001',
      ],
    },
    {
      name: 'deer',
      ex: 'json',
      children: [
        'Capsule.1',
        'Capsule.1_1',
        'Capsule.3',
        'Capsule.3_1',
        'Capsule.4',
        'Capsule.4_1',
        'corps',
        'eye_right',
        'eye_right.1',
        'jambes',
        'jambes.1',
        'jambes.2',
        'jambes.3',
        'nez',
        'queue',
        'sabot.1',
        'sabot.2',
        'sabot.3',
        'tete',
      ],
    },
    // {
    //   name: 'gift',
    //   ex: 'json',
    //   children: [
    //     'Cube.002',
    //     'Cube.1',
    //     'Cube.2',
    //     'Cube.3',
    //     'mono:0',
    //     'mono:1',
    //     'mono:2',
    //     'mono:3',
    //     'mono:4',
    //     'mono:5',
    //   ],
    // },
  ]
};

export default props;
