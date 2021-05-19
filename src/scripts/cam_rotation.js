import * as THREE from 'three'
import gsap from 'gsap'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const moviePosterUrls = [
  'https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_styleA_original_film_art_d26e81c0-1b87-4076-9da4-9fcdc0389ea5_1200x.jpg?v=1607475298',
  'https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089',
  'https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289',
  'http://cdn.shopify.com/s/files/1/0290/5663/0868/products/businessasusual999x666-min_1200x.jpg?v=1584637332',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHR1sxMneOFCatwgpVQqkeC2g_XRDRWgsVm_BpVHxbv10TBA4&s',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/950e439404c3d5eddd86ae876cec83bf_949b5045-2503-4883-bcd2-ff1f31f5b14c_240x360_crop_center.progressive.jpg?v=1573588746',
  'https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg',
  'https://m.media-amazon.com/images/I/71pAQsmvQyL._AC_SY879_.jpg',
]

function main() {
  ////////////////////////////////////////////////////////////////////////
  //// Classes
  class PickHelper {
    constructor () {
      this.raycaster = new THREE.Raycaster()
      this.pickedObject = null
      this.pickedObjectSavedColor = 0
    }
  
    pick(normalizedPosition, scene, camera, time) {
      if (this.pickedObject) {
        this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor)
        this.pickedObject = undefined
      }
  
      this.raycaster.setFromCamera(normalizedPosition, camera)
  
      const intersectedObjects = this.raycaster.intersectObjects(scene.children)
      if (intersectedObjects.length) {
        this.pickedObject = intersectedObjects[0].object
        console.log('mouse on object')
        this.pickedObject.set.scale = (1.5, 1.5, 1.5) 
			}
		}
	}

  //// Setup
  const canvas = document.querySelector('#c')
  const scene = new THREE.Scene()
  const loader = new THREE.TextureLoader
  // scene.background = new THREE.Color('gray')

  // Camera
  const fov = 75    // field of view in degrees
  const aspect = window.innerWidth / window.innerHeight
  const near = 0.1
  const far = 10000
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(0, 0, 10)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  // PickHelper
  const pickPosition = {x: 0, y: 0}
  const pickHelper = new PickHelper()
  clearPickPosition()

  // Renderer
  const renderer = new THREE.WebGLRenderer({ 
    canvas,
    alpha: true
   })

  //////////////////////////////////////////////////////////////////////
  //// Objects
  // Cubes
  const geometry = new THREE.BoxGeometry(10, 15, 10);
  const numObjects = moviePosterUrls.length;
	const radius = 80
	const movieEnlargeScale = 1.5
  const movies = []
  for (let i = 0; i < numObjects; ++i) {
    movies.push(makeInstance(geometry, i, i.toString()))
  }

  // Lights
  const color = 0xFFFFFF
  const intensity = 1
  const light1 = new THREE.DirectionalLight(color, intensity)
  light1.position.set(0, 2, 5)
  scene.add(light1)
  const light2 = new THREE.DirectionalLight(color, intensity)
  light2.position.set(0, 2, -5)
  scene.add(light2)
  
  /////////////////////////////////////////////////////////////////////////
  //// Controls
  const controls = new OrbitControls( camera, renderer.domElement )
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.25;
  controls.enableZoom = false
  // controls.zoomSpeed = 1
  controls.autoRotate = true
  // controls.screenSpacePanning = false;
  // controls.minDistance = 100;
  // controls.maxDistance = 500;
  // controls.maxPolarAngle = Math.PI / 2;
  controls.update()
  
  //////////////////////////////////////////////////////////////////////////
  //// Events
  const mouseVector = new THREE.Vector2()
	const raycaster = new THREE.Raycaster()
  let picked_id = -1
  let is_clicked = false

	let cameraVector = {x:0, y:0, z:0}
	let controlsVector = {x:0, y:0, z:0}

  ///////////////////////////////////////////////////////////////////////////
  //// Functions
  function makeInstance(geometry, idx) {
    const material = new THREE.MeshBasicMaterial({ 
      // map: loader.load(`${title}.jpg`),
      map: loader.load(moviePosterUrls[idx]),
      side: THREE.DoubleSide
    })

    const movie = new THREE.Mesh(geometry, material);
    scene.add(movie);
    
		const rad = idx * (2*Math.PI / numObjects)
    const x = radius * Math.cos(rad)
    const z = radius * Math.sin(rad)
    movie.position.set(x, 0, z);
    movie.lookAt(0, 0, 0)
    movie.x = x
    movie.z = z
		movie.rad = rad

    return movie    
  }
  main.makeInstance = makeInstance

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  
  function getCanvasRelativePosition(e) {
    const rect = canvas.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left) * canvas.width / rect.width,
      y: (e.clientY - rect.top) * canvas.height / rect.height,
    }
  }

  function setPickPosition(e) {
    const pos = getCanvasRelativePosition(e)
    pickPosition.x = (pos.x / canvas.width) * 2 - 1
    pickPosition.y = (pos.y / canvas.height) * -2 + 1   // flip Y
  }

  function clearPickPosition() {
    // unlike the mouse which always has a position
    // if the user stops touching the screen we want
    // to stop picking. For now we just pick a value
    // unlikely to pick something
    pickPosition.x = -100000;
    pickPosition.y = -100000;
  }

  function rand(min, max) {
    if (max === undefined) {
      max = min;
      min = 0;
    }
    return min + (max - min) * Math.random();
  }

  function randomColor() {
    return `hsl(${rand(360) | 0}, ${rand(50, 100) | 0}%, 50%)`;
  }

  function onDocumentMouseMove( event ) {
    event.preventDefault();
    mouseVector.x = ( event.clientX / window.innerWidth ) * 2 - 1
    mouseVector.y = - ( event.clientY / window.innerHeight ) * 2 + 1
    
    is_clicked = true
	}

	function onDocumentMouseDown( event ) {
		event.preventDefault()
		mouseVector.x = ( event.clientX / window.innerWidth ) * 2 - 1
		mouseVector.y = - ( event.clientY / window.innerHeight ) * 2 + 1
		
		is_clicked = true
		
		pickImage( mouseVector );
	}

	function onDocumentMouseUp( event ) {
		event.preventDefault()
		mouseVector.x = ( event.clientX / window.innerWidth ) * 2 - 1
		mouseVector.y = - ( event.clientY / window.innerHeight ) * 2 + 1
		
		is_clicked = false
	}

	//image controller
	function pickImage(vector) {
		if (picked_id === -1) {
			//collision detection
			var intersects = null
			raycaster.setFromCamera(vector, camera)
			intersects = raycaster.intersectObjects(scene.children)
			if (intersects.length > 0 && is_clicked) {
				
				setTimeout(() => {
					//display button
					document.querySelector('.close').style.display = 'block'

					// change camera far after animation moving in is done
					camera.far = 30
					camera.updateProjectionMatrix();
				}, 2000)
				
				// stop auto-rotation
				controls.autoRotate = false
				
				
				//temporary pointing
				cameraVector = {
					x: camera.position.x,
					y: camera.position.y,
					z: camera.position.z
				}
				
				controlsVector = {x: 0, y: 0, z: 0}   
				
				//---
				document.body.classList.add('is-pointed')
				picked_id = intersects[0].object.id
				
				//---Change object position
				var targetObj = intersects[0].object
				
				gsap.to(controls.target, {
					duration: 2,
					x:targetObj.position.x, 
					y:targetObj.position.y, 
					z:targetObj.position.z
				});
				gsap.to(camera.position, {
					duration:2,
					x: Math.cos(targetObj.rad) * radius * 0.8, 
					y: targetObj.position.y, 
					z: Math.sin(targetObj.rad) * radius * 0.8,
					onUpdate:function(){
						camera.updateProjectionMatrix();
					}
				});  
			}
		}
	}
				
	function resetPickImage() {
			document.body.classList.remove('is-pointed');
			picked_id = -1;

			// change camera far
			camera.far = 10000
			camera.updateProjectionMatrix();

			// restart auto-rotation
			controls.autoRotate = true
			
			//Change object position 
			gsap.to(controls.target, {
				duration: 2, 
				x:controlsVector.x, 
				y:controlsVector.y, 
				z:controlsVector.z
			});
			gsap.to(camera.position, {
				duration: 2, 
				x: cameraVector.x, 
				y: 0, 
				z: cameraVector.z,
				onUpdate:function(){
					camera.updateProjectionMatrix()
				}
			});  
			document.querySelector('.close').style.display = 'none'
	}

	document.querySelector('.close').addEventListener('click', () => {
		resetPickImage()
	})

	//angle = rad / ( Math.PI / 180 )  = rad * ( 180/Math.PI );
	function getDegree( rad ) {
			return rad / Math.PI * 180;
	}

	//rad = Math.PI / 180 * 30 ;
	function getRadian( deg ) {
			return deg * Math.PI / 180;
	}

	//Convert three.js scene rotation to polar coordinates
	//x = r * cos（θ）
	//y = r * sin（θ）   
	function getPolarCoord(x, y, z) {
			var nx = Math.cos(x) * Math.cos(y) * z,
					nz = Math.cos(x) * Math.sin(y) * z,
					ny = Math.sin(x) * z;
			return new THREE.Vector3(nx, ny, nz)
	}

	function getRandomInt( min , max ) {
			return Math.floor(Math.random()*(max-min))+min;
	}

  ///////////////////////////////////////////////////////////////////////////
  //// Rendering
  renderer.render(scene, camera)
  
  function render(time) {
    time *= 0.001

    // on window resize
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }

    // update camera aspect
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
    
    // // PickHelper
    // pickHelper.pick(pickPosition, scene, camera, time)

		// //update picked movie size    
		// for (var i = 0; i < movies.length; i++) {
		// 	movies[i].lookAt(0, movies[i].position.y, 0)
			
		// 	if (movies[i].id == picked_id ) {
		// 		if ( is_clicked ) {
		// 			movies[i].scale.set(movieEnlargeScale,movieEnlargeScale,movieEnlargeScale)
		// 		}
		// 	} else {
		// 		movies[i].scale.set(1,1,1)
		// 	}
		// } 

		// mouse interaction
		raycaster.setFromCamera( mouseVector, camera );

    // Rendering
    controls.update()
    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)

  ///////////////////////////////////////////////////////////////////////
  //// EventListeners
  // window.addEventListener('mousemove', setPickPosition);
  // window.addEventListener('mouseout', clearPickPosition);
  // window.addEventListener('mouseleave', clearPickPosition);

  window.addEventListener('mousemove', onDocumentMouseMove, false);
  document.querySelector('#c').addEventListener('click', onDocumentMouseDown, false);
  window.addEventListener('mouseup', onDocumentMouseUp, false);
}

export default main
