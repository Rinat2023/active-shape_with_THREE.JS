import * as THREE from 'three';

const scene = new THREE.Scene();

const cubegeometry = new THREE.BoxGeometry(1, 2, 1.3);
const cubematerial = new THREE.MeshBasicMaterial({
  color: 'white',
  wireframe: true,
});

const spheregeometry = new THREE.SphereGeometry(
  2,
  30,
  30,
  0,
  Math.PI * 2,
  0,
  Math.PI * 2
);

const spherematerial = new THREE.MeshBasicMaterial({ color: 'red' });

const cube1 = new THREE.Mesh(cubegeometry, cubematerial);
const cube2 = new THREE.Mesh(cubegeometry, cubematerial);
const sphere = new THREE.Mesh(spheregeometry, spherematerial);

const group = new THREE.Group();

cube1.position.y = -2.8;
cube2.position.y = 2.8;

group.add(cube1);
group.add(cube2);
group.add(sphere);

scene.add(group);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
// }
// animate();

document.addEventListener('mousemove', (e) => {
  group.rotation.y = e.clientX / 100 / 4;
  group.rotation.x = e.clientY / 100 / 6;
  // console.log(e.clientX / 100 - 5);
  renderer.render(scene, camera);
});

console.log();

document.body.appendChild(renderer.domElement);
