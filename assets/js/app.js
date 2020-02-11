let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 85, window.innerWidth / window.innerHeight, .1, 1000 );


// //BOX GEOMETRY
const width = 13;
const height = 13;
const depth = 13;
const geometry = new THREE.BoxBufferGeometry(width, height, depth);

//texture used
let texture = new THREE.TextureLoader().load( 'assets/textures/test.png' );
let TextureGrass = new THREE.TextureLoader().load( 'assets/textures/grass.png' );
let background = new THREE.TextureLoader().load('assets/textures/bgonepiece2.png');
let backgroundtest = new THREE.MeshBasicMaterial({map: background});
let grass = new THREE.MeshBasicMaterial( { map: TextureGrass } );
let soil = new THREE.MeshBasicMaterial( { map: texture } );

//LAND 
let plane = new THREE.PlaneBufferGeometry(360, 160, 2, 2);


let castleLeftBrick = new THREE.Mesh( geometry, soil ); 
let floor = new THREE.Mesh( plane, grass);
let castleRightBrick = new THREE.Mesh(geometry, soil);

scene.add( floor );
//scene.add( castleLeftBrick );
scene.add( castleRightBrick );



//camera.position.z = 100;
camera.position.set( 0, 20, 120 );

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
scene.background = (background) ;
function animate() {
    // var speed = Date.now() * 0.00025;
    // camera.position.x = Math.cos(speed) * 10;
    // camera.position.z = Math.sin(speed) * 10;
    //camera.position.y = 250;
    
    //camera.lookAt(floor.position);
   requestAnimationFrame( animate );
   controls = new THREE.OrbitControls(camera, );
   //FLOOR
   floor.rotation.x = 300;
   floor.position.y = 0;

   //CUBE BRICK LEFT
   castleLeftBrick.position.x = -50;
   castleLeftBrick.position.y = 20;
   castleLeftBrick.position.z = -40;

   //CUBE BRICK RIGHT
   castleRightBrick.position.x = -20;
   castleRightBrick.position.y = 10;
   controls.update();
   renderer.render( scene, camera );
}

animate();
//render();
