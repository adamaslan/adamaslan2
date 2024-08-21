import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BufferGeometry();
const count = 50;
const positionsArray = new Float32Array(count * 3 * 3);
for (let i = 0; i < count * 3 * 3; i++) {
  positionsArray[i] = (Math.random() - 0.5) * 4;
}
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 2);
geometry.setAttribute("position", positionsAttribute);

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  desktopWidth: window.innerWidth * 0.2, // 1/5 of window width
  mobileWidth: window.innerWidth * 0.9, // 90% of window width
  mobileHeight: window.innerHeight * 0.1, // 1/10 of window height
  aspect: 0,
};
// Resize event listener
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update desktop/mobile sizes
  if (window.innerWidth > 768) {
    // Desktop
    sizes.desktopWidth = window.innerWidth * 0.2;
    sizes.mobileWidth = window.innerWidth * 0.9;
    sizes.mobileHeight = window.innerHeight * 0.1;
    sizes.aspect = sizes.desktopWidth / (window.innerHeight * 0.1);
  } else {
    // Mobile
    sizes.desktopWidth = window.innerWidth * 0.2;
    sizes.mobileWidth = window.innerWidth * 0.9;
    sizes.mobileHeight = window.innerHeight * 0.1;
    sizes.aspect = sizes.mobileWidth / sizes.mobileHeight;
  }

// Camera
camera.aspect = sizes.aspect;
camera.updateProjectionMatrix();

const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 1, 1000);
camera.position.z = 3;
  // Update camera


scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;





// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Initial render
if (window.innerWidth > 768) {
  // Desktop
  renderer.setSize(sizes.desktopWidth, window.innerHeight * 0.1);
} else {
  // Mobile
  renderer.setSize(sizes.mobileWidth, sizes.mobileHeight);
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// Animate
const clock = new THREE.Clock();

function animate(time) {
  time *= 0.001;
  // Other animation logic...
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
