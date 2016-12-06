import { Scene, Object3D, Vector3, AmbientLight, Mesh, MeshBasicMaterial} from 'three';
import { loadObj, loadJSON } from '../core/loaderManager';
import props from '../core/props';
import Skybox from '../components/skybox';
import Planet from '../components/planet';
import VolumetricLight from '../components/volumetricLight';
import StarsTexture from '../components/starsTexture';

export default class MainScene extends Scene {
  constructor() {
    super()
    this.meshCount = 0;
    this.meshListeners = [];

    // TODO load all object before construct
    // TODO add loaderVisualizer
    console.log('load objects...');
    const objName = 'christmasTree';
    loadObj(`assets/${objName}.json`, ( loadedObjs ) => {

      // Load all christmastree obj
      const object = new Object3D();
      object.add(loadedObjs.getObjectByName('eye_right'));
      object.add(loadedObjs.getObjectByName('eye_left'));
      object.add(loadedObjs.getObjectByName('Cône'));
      object.add(loadedObjs.getObjectByName('Cône.1'));
      object.add(loadedObjs.getObjectByName('Cône.2'));
      const tronc = loadedObjs.getObjectByName('tronc');
      tronc.material.skinning = true;
      tronc.material.needsUpdate = true;
      object.add(tronc);
      props.objects.set(objName, object);

      this.skybox = new Skybox()
      this.add( this.skybox );

      this.planet = new Planet()
      this.addMesh( this.planet );

      this.cylinder = new VolumetricLight()
      this.cylinder.position.y = 220
      this.addMesh( this.cylinder )

      this.stars = new StarsTexture()
      this.stars.position.y = 200
      this.stars.position.z = -200
      this.addMesh( this.stars )
    });
  }

  update() {
    let i = this.meshCount;
    while (--i >= 0) {
      this.meshListeners[i]();
    }
  }

  /**
   * Add mesh into the loop possibly with update params
   * @param {Object3d} mesh
   * @param {Array} params (All another params passed in parameters)
   */
  addMesh(mesh, ...params) {
    this.add(mesh);
    if (!mesh.update) return;
    this.meshListeners.push(() => { mesh.update(...params); });
    this.meshCount++;
  }

  removeMesh(mesh) {
    // TODO use map to remove the entry propertly
    const idx = this.meshListeners.indexOf(() => { mesh.update(); });
    this.meshListeners.splice(idx, 1);
    this.meshCount--;
  }
}
