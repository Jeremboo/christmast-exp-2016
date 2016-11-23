import { Mesh, SphereGeometry, ShaderMaterial, Vector3 } from 'three'
import ThreejsTextureTool from 'threejs-texture-tool'

import props from '../core/props';

const glslify = require( 'glslify' )

const vertexShader = glslify( '../shaders/sphere-vs.glsl' )
const fragmentShader = glslify( '../shaders/sphere-fs.glsl' )

export default class Sphere extends Mesh {
  constructor() {
    const geometry = new SphereGeometry( 100, 30, 30 )
    const textureTool = new ThreejsTextureTool();

    const biomeTextureTool = textureTool.createImageTexture('assets/images/biome.jpg', 'Biome');
    const heightMapTextureTool = textureTool.createImageTexture('assets/images/heightMap.jpg', 'HeightMap');

    const material = new ShaderMaterial( {
      vertexShader,
      fragmentShader,
      uniforms: {
        uColor: {
          type: 'v3',
          value: new Vector3( 1.0, 1.0, 1.0 )
        },
        uLight: {
          type: 'v3',
          value: props.lightPosition,
        },
        uTexture: biomeTextureTool.uniform,
        uHeightMap: heightMapTextureTool.uniform,
      },
      transparent: true
    } )

    super( geometry, material )

    this.targetedRotation = new Vector3()
  }

  update( ) {
    // update light position
    this.material.uniforms.uLight.value = props.lightPosition;

    // update rotation
    const distRotation = this.targetedRotation.clone().sub(this.rotation.toVector3());
    const rotationForce = distRotation.multiplyScalar(0.1);

    // update rotation with rotationForce
    this.rotation.setFromVector3(this.rotation.toVector3().add(rotationForce));
  }
}
