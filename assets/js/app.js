let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );


// //BOX GEOMETRY
const width = 140;
const height = 60;
const depth = 13;
const geometry = new THREE.BoxBufferGeometry(width, height, depth);

const width11 = 20;
const height11 = 20;
const depth11 = 13;
const geometry11 = new THREE.BoxBufferGeometry(width11, height11, depth11);

const width111 = 220;
const height111 = 120;
const depth111 = 130;
const geometryBo = new THREE.BoxBufferGeometry(width111, height111, depth111);

const width1111 = 100;
const height1111 = 50;
const depth1111 = 80;
const geometryBo1 = new THREE.BoxBufferGeometry(width1111, height1111, depth1111);

const width11111 = 500;
const height11111 = 50;
const depth11111 = 80;
const geometryBo2 = new THREE.BoxBufferGeometry(width11111, height11111, depth11111);

//circle
const radius222 = 35;
const segments222 = 100;
const geometryCi = new THREE.CircleBufferGeometry(radius222, segments222);

//
const radius15 = 600;
const segments15 = 280;
const geometryRing = new THREE.RingGeometry(radius15, segments15);

//Lathe
const points = [];
for (let i = 0; i < 10; ++i) {
  points.push(new THREE.Vector2(Math.sin(i * 0.5) * 30 + 30, (i - 5) * 10));
}
const geometryLa = new THREE.LatheBufferGeometry(points);

//torus
const radius22 = 50;
const tubeRadius22 = 20;
const radialSegments22 = 80;
const tubularSegments22 = 240;
const geometryTo = new THREE.TorusBufferGeometry(radius22, tubeRadius22, radialSegments22, tubularSegments22);

//cone
const radius2 = 50;
const height2 = 50;
const segments2 = 60;
const geometryCo = new THREE.ConeBufferGeometry(radius2, height2, segments2);




//cylinder wall
const radiusTop1 = 30;
const radiusBottom1 = 30;
const height1 = 80;
const radialSegments1 = 30;
const geometryCy = new THREE.CylinderBufferGeometry(radiusTop1, radiusBottom1, height1, radialSegments1);
 
const radiusTop10 = 50;
const radiusBottom10 = 50;
const height10 = 200;
const radialSegments10 = 30;
const geometryCy1 = new THREE.CylinderBufferGeometry(radiusTop10, radiusBottom10, height10, radialSegments10);
 
//texture used
let texture = new THREE.TextureLoader().load( 'assets/textures/wallmain.png' );
let TextureGrass = new THREE.TextureLoader().load( 'assets/textures/grass2.png' );
let moatGrass = new THREE.TextureLoader().load('assets/textures/grass3.png')
let textureWall = new THREE.TextureLoader().load( 'assets/textures/wallmain.png' );
let textureDoor = new THREE.TextureLoader().load( 'assets/textures/door.png' );
let textureRoof = new THREE.TextureLoader().load( 'assets/textures/cone.png' );
let textureTo = new THREE.TextureLoader().load( 'assets/textures/sea.png' );
let textureJr = new THREE.TextureLoader().load( 'assets/textures/sh.png' );
let mainBackground = new THREE.TextureLoader().load('assets/textures/backgroundone.png')
let roofTwo = new THREE.TextureLoader().load( 'assets/textures/mine.png' );


let grass = new THREE.MeshBasicMaterial( { map: TextureGrass } );
let soil = new THREE.MeshBasicMaterial( { map: texture } );
let wall = new THREE.MeshBasicMaterial( {map: textureWall} );
let moat = new THREE.MeshBasicMaterial({ map: moatGrass});
let doorMain = new THREE.MeshBasicMaterial( {map: textureDoor} );
let roof = new THREE.MeshBasicMaterial( {map: textureRoof} );
let torus1 = new THREE.MeshBasicMaterial( {map: textureTo} );
let wallBody = new THREE.MeshBasicMaterial( {map: textureWall} );
let wallBody2 = new THREE.MeshBasicMaterial( {map: textureWall} );
let circle = new THREE.MeshBasicMaterial( {map: textureJr} );
let roof2 = new THREE.MeshBasicMaterial( {map: roofTwo} );



//LAND 
let plane = new THREE.PlaneBufferGeometry(1000, 1600, 2, 2);

let moatt = new THREE.Mesh(geometryRing, moat);

let rightRo = new THREE.Mesh(geometryLa, roof2);
let leftRo = new THREE.Mesh(geometryLa, roof2);


let rightWall = new THREE.Mesh(geometryCy, wall);
let leftWall = new THREE.Mesh(geometryCy, wall);
let rightBigWall = new THREE.Mesh(geometryCy1, wall);
let leftBigWall = new THREE.Mesh(geometryCy1, wall);

let bodyWall = new THREE.Mesh(geometryBo, wall);
let bodyWall2 = new THREE.Mesh(geometryBo1, wall);

let pathWay = new THREE.Mesh(geometryBo2,wall);

let castleLeftBrick = new THREE.Mesh( geometry, soil ); 
let floor = new THREE.Mesh( plane, grass);
let castleRightBrick = new THREE.Mesh(geometry, soil);
let door = new THREE.Mesh(geometry11, doorMain);
let rightRoof = new THREE.Mesh(geometryCo, roof);
let leftRoof = new THREE.Mesh(geometryCo, roof);

let rightTo = new THREE.Mesh(geometryTo, torus1);
let leftTo = new THREE.Mesh(geometryTo, torus1);

let circleNow = new THREE.Mesh(geometryCi, circle);
scene.add( floor );
//scene.add( castleLeftBrick );
scene.add( castleRightBrick );

scene.add(pathWay);
scene.add(moatt);
scene.add(rightRo);
scene.add(leftRo);

scene.add(rightWall);
scene.add(leftWall);

scene.add(rightBigWall);
scene.add(leftBigWall);
scene.add(bodyWall);
scene.add(bodyWall2);
scene.add(door);
scene.add(rightRoof);
scene.add(leftRoof);
scene.add(rightTo);
scene.add(leftTo);
scene.add( circleNow );
scene.background=(mainBackground);

camera.position.set( 500, 100, 500 );
// camera.position.x = 100;
// camera.position.y = 0;
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
   requestAnimationFrame( animate );


   //controls
   controls = new THREE.OrbitControls(camera, );

   //Lathe
   rightRo.position.x=200;
   rightRo.position.y=180;
   rightRo.position.z=-155;

   leftRo.position.x=-200;
   leftRo.position.y=180;
   leftRo.position.z=-155;

   //circular
   circleNow.position.x=0;
   circleNow.position.y=80;
   circleNow.position.z=-103;

  //moat? 
  moatt.position.x=-10;
  moatt.position.y=10;
  moatt.rotation.x = 1.55;

    //pathway
    pathWay.position.x = 0;
    pathWay.position.y = -20;
    pathWay.position.z = 100;
    pathWay.rotation.y = 33;

   //wall

   bodyWall2.position.x=0;
   bodyWall2.position.y=15;
   bodyWall2.position.z=-100;


   bodyWall.position.x=0;
   bodyWall.position.y=55;
   bodyWall.position.z=-170;

   rightBigWall.position.x=200;
   rightBigWall.position.y=40;
   rightBigWall.position.z=-155;

   leftBigWall.position.x=-200;
   leftBigWall.position.y=40;
   leftBigWall.position.z=-155;

   rightWall.position.x = 100;
   rightWall.position.y = 40;
   rightWall.position.z = -50;

   leftWall.position.x = -100;
   leftWall.position.y = 40;
   leftWall.position.z = -50;
   //FLOOR
   floor.rotation.x = 300;
   floor.position.y = 0;

   //CUBE BRICK LEFT
   castleLeftBrick.position.x = -30;
   castleLeftBrick.position.y = -22;
   castleLeftBrick.position.z = -40;

   //CUBE BRICK RIGHT
   castleRightBrick.position.x = 0;
   castleRightBrick.position.y = 30;
   castleRightBrick.position.z = -50;
    
   //door
   door.position.x=0;
   door.position.y=10;
   door.position.z=-49;

   //roof
   rightRoof.position.x=100;
   rightRoof.position.y=100;
   rightRoof.position.z=-50;

   leftRoof.position.x=-100;
   leftRoof.position.y=100;
   leftRoof.position.z=-50;

   //roofhug
   rightTo.position.x=100;
   rightTo.position.y=110;
   rightTo.position.z=-50;

   leftTo.position.x=-100;
   leftTo.position.y=110;
   leftTo.position.z=-50;



   controls.update();

   renderer.render( scene, camera );
}
animate();