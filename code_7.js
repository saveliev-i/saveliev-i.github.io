import * as THREE from 'https://unpkg.com/three/build/three.module.js';
						
// 0ur Javascript will go here
 
//import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var delta=0;
{
	delta+=0.1;
	planegeometry.vertices[0].z=-25+Math.sin(delta)*50;
	planegeometry.verticesNeedUpdate=true;
}

function render()
{
		pyramidmesh.rotation.y+=0.1;
		paradmesh.rotation.x+=0.1;
		paradmesh.rotation.y+=0.1;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
}

render();

var pyramidgeometry = new THREE.CylinderGeometry( 0, 0.8, 2,  ); 
var pyramidmaterial = new THREE.MeshLambertMaterial( {color: 0xF3FFE2}} ); 
var pyramid = new THREE.Mesh( pyramidgeometry, pyramidmaterial ); scene.add( cylinder );
pyramidmesh.position.set(0, 2, -10);
scene.add( pyramidmesh );

var lightOne=new THREE.AmbientLight(0xffffff, 0.5);
scene.add(lightOne);

var lightTwo=new THREE.PointLight(0xffffff, 0.5);
scene.add(lightTwo);

var boxgeometry=new THREE.BoxGeometry(1, 1, 1);
var boxmaterial=new THREE.MeshNormalMaterial({color: 0xFF0000, transparent: true, opacity: 1});
var boxmesh=new THREE.Mesh(boxgeometry, boxmaterial);
boxmesh.position.set(-0.9, 0, -6);
scene.add(boxmesh);

var spheregeometry=new THREE.SphereGeometry(0.5);
var spherematerial=new THREE.LineBasicMaterial({color: 0x888888});
var spheremesh=new THREE.Line(spheregeometry, spherematerial);
spheremesh.position.set(0.9, 0, -6);
scene.add(spheremesh);

var circlegeometry=new THREE.CircleBufferGeometry(0.5);
var circlematerial=new THREE.MeshStandardMaterial({color: 0x098877, roughness: 90.0, metalness: 0.2});
var circlemesh=new THREE.Mesh(circlegeometry, circlematerial);
circlemesh.position.set(2, 0, -6);
circlemesh.rotation.set(0, 0.5, 0);
scene.add(circlemesh);

var paraFunction=function(a, b)
{
var x=-5+5*a;
var y=-5+5*b;
var z=(Math.sin(a*Math.PI)+Math.sin(b*Math.PI))*(-7);
return new THREE.Vector3(x, y, z);
}

var parageometry=new THREE.paraGeometry(paraFunction, 8, 8);
var paramaterial=new THREE.MeshBasicMaterial({color: 0xF3FFE2});
var paramesh=new THREE.Mesh(parageometry, paramaterial);
paramesh.position.set(0, -2, -100);
scene.add(paramesh);

var planegeometry=new THREE.PlaneGeometry(10, 10);
var planematerial=new THREE.MeshPhongMaterial({color: 0xF3FFE2, specular: 0xFF0000, shininess: 50});
var planemesh=new THREE.Mesh(planegeometry, planematerial);
planemesh.position.set(0, -20, -100);
scene.add(planemesh);

camera.position.z = 5;
camera.position.x = 2;
 
let angle = 0, radius = 4;

function animate() {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
//		lightTwo.position.x = radius * Math.cos(angle) + 2;
//		lightTwo.position.y = radius * Math.sin(angle);
/*		
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		camera.position.x = radius * Math.cos(angle) + 2;
		camera.position.y = radius * Math.sin(angle);
		angle += Math.PI/180;
*/
}

animate();