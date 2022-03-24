

// // //basic setup
 const scene = new THREE.Scene();
// // //getting perspective cam
 const camera = new THREE.PerspectiveCamera( // props
      75, //field of view
  window.innerWidth/window.innerHeight, // aspect ratio. Makes the result as in old TV - documentation
    0.1, //near
    1000 //far
     );
 const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// //helper for the color f
const makeYellow = new THREE.Color("hsl(40, 100%, 60%)");
const material = new THREE.MeshPhongMaterial( { color: makeYellow, shininess :90} );

const geometry = new THREE.BoxGeometry(1, 1, 1);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 10;
pointLight.position.y = -10;
pointLight.position.z = 40;

scene.add(ambientLight, pointLight);
			
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.02;
				cube.rotation.y += 0.02;

				renderer.render( scene, camera );
			};

			animate();