// Three.js 3D Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(400, 400);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Add a 3D object (e.g., a cube)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffcc00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// GSAP for interactive animations
gsap.from('.content', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' });
gsap.from('#3d-container', { duration: 1, x: 50, opacity: 0, ease: 'power2.out', delay: 0.5 });