import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// Setup
let mouseX = 0;
let mouseY = 0;
document.addEventListener( 'mousemove', onDocumentMouseMove );
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
function onDocumentMouseMove( event ) {

  mouseX = ( event.clientX - windowHalfX ) / 100;
  mouseY = ( event.clientY - windowHalfY ) / 100;

}
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);


const geometry = new THREE.TorusKnotGeometry(15, 6, 600, 500);
const material = new THREE.MeshNormalMaterial({color: 0xffff00});
const torusKnot = new THREE.Mesh(geometry, material);
// Torus


  scene.add(torusKnot);



// Lights


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);




function animate() {
  requestAnimationFrame(animate);

  torusKnot.rotation.x += 0.005;
  torusKnot.rotation.y += 0.005;
  torusKnot.rotation.z += 0.005;

  renderer.render(scene, camera);
}

animate();
