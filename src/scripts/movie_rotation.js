import * as THREE from 'three'
import gsap from 'gsap'

// data to be received from vue
const vueData = []

// input movie data from vue here
function start(data) {
  vueData.push(...data)
}

function main() {
  // // test
  // console.log(vueData)

  ////////////////////////////////////////////////////////////////////////
  //// data
  const movieData = {
    Action: {
      idx: 0,
      urls: [
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
    },
    Romance: {
      idx: 1,
      urls: [
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
    },
    Comedy: {
      idx: 2,
      urls: [
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
    },
    Horror: {
      idx: 3,
      urls: [
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
    },
    'Sci-fi': {
      idx: 4,
      urls: [
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
    },
    Mystery: {
      idx: 5,
      urls: [
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
    },
  }

  ////////////////////////////////////////////////////////////////////////
  //// Setup
  const canvas = document.querySelector('#c')
  const scene = new THREE.Scene()
  const loader = new THREE.TextureLoader
  // scene.background = new THREE.Color('gray')
  
  // Camera
  const fov = 80    // field of view in degrees
  const aspect = window.innerWidth / window.innerHeight
  const near = 0.1
  const far = 10000
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  const cameraStartingPos = {x: 0, y:0, z: 30}
  const cameraTargetStartDist = 50
  const cameraTargetStart = {x: 0, y: 0, z: cameraTargetStartDist}
  const cameraScrollDist = 60
  let cameraTarget = {...cameraTargetStart}
  let cameraScrollIdx = 0
  camera.position.set(cameraStartingPos.x, cameraStartingPos.y, cameraStartingPos.z)
  camera.lookAt(new THREE.Vector3(cameraTargetStart.x, cameraTargetStart.y, cameraTargetStart.z))

  // Renderer
  const renderer = new THREE.WebGLRenderer({ 
    canvas,
    alpha: true
  })

  //////////////////////////////////////////////////////////////////////
  //// Objects
  // Movies
  const geometry = new THREE.BoxGeometry(10, 15, 10);
	const radius = 80
  const movieRotationSpeed = 0.0025
  let movieRotation = true
  let moviesFaceCam = true
  let formerMovieRotation
  
  const movies = []
  for (let genre in movieData) {
    movieData[genre]['urls'].forEach((url, idx) => {
      makeInstance(geometry, genre, url, idx)
    })
  }

  function makeInstance(geometry, genre, url, idx) {
    const material = new THREE.MeshBasicMaterial({map: loader.load(url)})

    const movie = new THREE.Mesh(geometry, material);
    scene.add(movie);
    
    const numMovies = movieData[genre]['urls'].length
		const rad = idx * (2*Math.PI / numMovies)
    const x = radius * Math.cos(rad)
    const y = -movieData[genre]['idx'] * cameraScrollDist
    const z = radius * Math.sin(rad)
    movie.position.set(x, y, z);
    movie.lookAt(cameraStartingPos.x, cameraStartingPos.y, cameraStartingPos.z)
		movie.rad = rad

    movies.push(movie)
  }
  main.makeInstance = makeInstance

  // Lights
  const color = 0xFFFFFF
  const intensity = 1
  const light1 = new THREE.DirectionalLight(color, intensity)
  light1.position.set(0, 2, 5)
  scene.add(light1)
  const light2 = new THREE.DirectionalLight(color, intensity)
  light2.position.set(0, 2, -5)
  scene.add(light2)
  
  //////////////////////////////////////////////////////////////////////////
  //// Events
  const mouseVector = new THREE.Vector2()
	const raycaster = new THREE.Raycaster()
  let picked_id = -1
  let is_clicked = false

  ///////////////////////////////////////////////////////////////////////////
  //// Functions
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
  
  // Mouse events
	function onCanvasMouseDown( event ) {
    event.preventDefault()
		mouseVector.x = event.clientX
		mouseVector.y = event.clientY
		is_clicked = true
		
		pickImage( mouseVector );
	}
  
	function onCanvasMouseUp( event ) {
    event.preventDefault()
		is_clicked = false
	}

  function onCanvasMouseMove( event ) {
    if (!is_clicked) {
      return
    }
    event.preventDefault();
    const deltaX = event.clientX - mouseVector.x
    const deltaY = event.clientY - mouseVector.y
    mouseVector.x = event.clientX
		mouseVector.y = event.clientY
    rotateMovie(deltaX, deltaY)
  }
  
  function onCanvasScroll (e) {
    if (picked_id !== -1) {
      return
    }
    if (e.deltaY > 0) {
      onScrollEvent('down')
    } else {
      onScrollEvent('up')
    }
  }
  
  function onScrollEvent (direction) {
    // on scrolling down
    if (direction === 'down') {
      cameraScrollIdx += 1
      gsap.to(camera.position, {
        duration:1,
        x: cameraStartingPos.x,
        y: -cameraScrollIdx * cameraScrollDist,
        z: cameraStartingPos.z,
        onUpdate:function(){
          camera.updateProjectionMatrix()
        }
      })
      // on scrolling up
    } else if (direction === 'up') {
      if (cameraScrollIdx >= 1) {
        cameraScrollIdx -= 1
        gsap.to(camera.position, {
          duration:1,
          x: cameraStartingPos.x,
          y: -cameraScrollIdx * cameraScrollDist,
          z: cameraStartingPos.z,
          onUpdate:function(){
            camera.updateProjectionMatrix();
          }
        })
      }
    } else {
      for (let genre in movieData) {
        if (genre === direction) {
          cameraScrollIdx = movieData[genre]['idx']
          gsap.to(camera.position, {
            duration:1,
            x: cameraStartingPos.x,
            y: -cameraScrollIdx * cameraScrollDist,
            z: cameraStartingPos.z,
            onUpdate:function(){
              camera.updateProjectionMatrix();
            }
          })
        }
      }
    }
  }

  main.onScrollEvent = onScrollEvent

  // rotate movie to show other sides
  function rotateMovie(deltaX) {
    movies.map((movie) => {
      if (movie.id === picked_id) {
        movie.rotation.y -= deltaX / 100
      }
    })
  }
  
	function pickImage(vector) {
		if (picked_id === -1) {
			//collision detection
			var intersects = null
      vector.x = (vector.x / window.innerWidth) * 2 - 1
      vector.y = (vector.y / window.innerHeight) * 2 - 1
			raycaster.setFromCamera(vector, camera)
			intersects = raycaster.intersectObjects(scene.children)
			if (intersects.length > 0 && is_clicked) {
				
				setTimeout(() => {
					//display button
					document.querySelector('.close').style.display = 'block'

					// change camera far after animation moving in is done
					camera.far = 30
					camera.updateProjectionMatrix();

          // movies stop facing camera for mouse interaction
          moviesFaceCam = false
				}, 1000)

        // stop movie rotation
        movieRotation = false
				
				document.body.classList.add('is-pointed')
        setTimeout(() => {
          picked_id = intersects[0].object.id
        }, 1000)
				
				// Change object position
				const targetObj = intersects[0].object
        formerMovieRotation = {x: targetObj.rotation.x, y: targetObj.rotation.y, z: targetObj.rotation.z}
				cameraTarget.x = camera.position.x
				cameraTarget.y = camera.position.y
				cameraTarget.z = cameraTargetStartDist
				gsap.to(cameraTarget, {
					duration: 1,
					x:targetObj.position.x, 
					y:targetObj.position.y, 
					z:targetObj.position.z,
          onUpdate:function(){
            camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z)
            camera.updateProjectionMatrix();
          }
				})
				gsap.to(camera.position, {
					duration:1,
					x: Math.cos(targetObj.rad) * radius * 0.8, 
					y: targetObj.position.y, 
					z: Math.sin(targetObj.rad) * radius * 0.8,
					onUpdate:function(){
						camera.updateProjectionMatrix();
					}
				})
			}
		}
	}
				
	function resetPickImage() {
			document.body.classList.remove('is-pointed');
      
      // movies face camera again
      moviesFaceCam = true
      
      setTimeout(() => {
        // resume movie ratation
        movieRotation = true
        picked_id = -1;
      }, 1000)

			// change camera far
			camera.far = 10000
			camera.updateProjectionMatrix();

			//Change object position 
			gsap.to(cameraTarget, {
				duration: 1, 
				x:cameraTargetStart.x, 
				y:camera.position.y, 
				z:cameraTargetStart.z,
        onUpdate: function (){
          camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z)
          camera.updateProjectionMatrix()
        }
			})
      const currY = camera.position.y
			gsap.to(camera.position, {
				duration: 1, 
				x: cameraStartingPos.x, 
				y: currY, 
				z: cameraStartingPos.z,
				onUpdate: function (){
          camera.updateProjectionMatrix()
				}
			})
      movies.forEach((movie) => {
        let tempMovieRotation = {x: movie.rotation.x, y: movie.rotation.y, z: movie.rotation.z}
        if (movie.id === picked_id) {
          gsap.to(tempMovieRotation, {
            duration: 1,
            x: formerMovieRotation.x,
            y: formerMovieRotation.y,
            z: formerMovieRotation.z,
            onUpdate: function () {
              movie.rotation.x = tempMovieRotation.x
              movie.rotation.y = tempMovieRotation.y
              movie.rotation.z = tempMovieRotation.z
            }
          })

        }
      })
			document.querySelector('.close').style.display = 'none'
	}

	document.querySelector('.close').addEventListener('click', () => {
		resetPickImage()
	})

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

    // update movies position
    movies.forEach((movie) => {
      if (movieRotation) {
        const newRad = movie.rad + movieRotationSpeed
        movie.rad = newRad > 2 * Math.PI ? newRad - 2 * Math.PI : newRad
        const newX = radius * Math.cos(movie.rad)
        const newZ = radius * Math.sin(movie.rad)
        movie.x = newX
        movie.z = newZ
        movie.position.set(movie.x, movie.position.y, movie.z)
      }
      // if (moviesFaceCam && movie.id !== picked_id && cameraScrollIdx === 0) {
      if (moviesFaceCam && movie.id !== picked_id) {
        movie.lookAt(camera.position)
      }
    })

		// mouse interaction
		raycaster.setFromCamera( mouseVector, camera );

    // Rendering
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)

  ///////////////////////////////////////////////////////////////////////
  //// EventListeners
  canvas.addEventListener('mouseup', onCanvasMouseUp, false);
  canvas.addEventListener('mousedown', onCanvasMouseDown, false)
  canvas.addEventListener('mousemove', onCanvasMouseMove, false)
  canvas.addEventListener('mousewheel', onCanvasScroll, false)
}

export { start, main }
