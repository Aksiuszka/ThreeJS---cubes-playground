//basic setup
const scene = new THREE.Scene();
//getting perspective cam
const camera = new THREE.PerspectiveCamera( // props
    75, //field of view
    window.innerWidth/window.innerHeight, // aspect ratio. Makes the result as in old TV - documentation
    0.1, //near
    1000 //far
);
const renderer = new THREE.WebGLRenderer({antialias});
renderer.setClearColor("")
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );