

// //basic setup
const scene = new THREE.Scene();
// //getting perspective cam
const camera = new THREE.PerspectiveCamera( // props
     75, //field of view
 window.innerWidth/window.innerHeight, // aspect ratio. Makes the result as in old TV - documentation
   0.1, //near
   1000 //far
    );
 const renderer = new THREE.WebGLRenderer();
// renderer.setClearColor("#e2e2e2")
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//helper for the color f
const makePink = new THREE.Color("hsl(40, 100%, 60%)");
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
const cubeMaterial = new THREE.MeshPhongMaterial({
color: makePink,
shininess: 80,
});
const cubeGeometry = new THREE.BoxGeometry({
    width:20,
    height: 10,
    depth:50,
});
const light = new THREE.PointLight(makePink, 2);
light.position.z =20;
light.position.y=-20;
light.position.x=-40;
scene.add(light);
// //make the renderer responsive
// window.addEventListener('resize',()=>{
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth/window.innerHeight;
//     camera.updateProjectMatrix();
// });
scene.add(cube);
camera.position.z=15;
renderer.render(scene, camera);

console.log(THREE);
