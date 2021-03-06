import * as THREE from 'three'
import gsap from 'gsap'
import { data } from 'jquery'

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
      urls: ['https://image.tmdb.org/t/p/w500//rEm96ib0sPiZBADNKBHKBv5bve9.jpg', 'https://image.tmdb.org/t/p/w500//nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg', 'https://image.tmdb.org/t/p/w500//pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg', 'https://image.tmdb.org/t/p/w500//oBgWY00bEFeZ9N25wWVyuQddbAo.jpg', 'https://image.tmdb.org/t/p/w500//tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg', 'https://image.tmdb.org/t/p/w500//h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg', 'https://image.tmdb.org/t/p/w500//AoWY1gkcNzabh229Icboa1Ff0BM.jpg', 'https://image.tmdb.org/t/p/w500//lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg', 'https://image.tmdb.org/t/p/w500//3mKMWP5OokB7QpcOMA1yl8BXFAF.jpg', 'https://image.tmdb.org/t/p/w500//keEnkeAvifw8NSEC4f6WsqeLJgF.jpg', 'https://image.tmdb.org/t/p/w500//6vcDalR50RWa309vBH1NLmG2rjQ.jpg', 'https://image.tmdb.org/t/p/w500//9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg', 'https://image.tmdb.org/t/p/w500//1UCOF11QCw8kcqvce8LKOO6pimh.jpg', 'https://image.tmdb.org/t/p/w500//8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg', 'https://image.tmdb.org/t/p/w500//xCEg6KowNISWvMh8GvPSxtdf9TO.jpg', 'https://image.tmdb.org/t/p/w500//zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg', 'https://image.tmdb.org/t/p/w500//6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg', 'https://image.tmdb.org/t/p/w500//AmUGn1rJ9XDDP6DYn9OA2uV8MIg.jpg', 'https://image.tmdb.org/t/p/w500//dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg', 'https://image.tmdb.org/t/p/w500//6goDkAD6J3br81YMQf0Gat8Bqjy.jpg']
    },
    Romance: {
      idx: 1,
      urls: ['https://image.tmdb.org/t/p/w500//3btDwus5VN5jOWfA9strpDJWwfj.jpg', 'https://image.tmdb.org/t/p/w500//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg', 'https://image.tmdb.org/t/p/w500//bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg', 'https://image.tmdb.org/t/p/w500//gn2vCmWO7jQBBto9SYuBHYZARaU.jpg', 'https://image.tmdb.org/t/p/w500//c7JzcVK4OZY1u7HYiFBOASkKPP5.jpg', 'https://image.tmdb.org/t/p/w500//xKCtoYHUyX8zAg68eemnYa2orep.jpg', 'https://image.tmdb.org/t/p/w500//umy454n46930E9ak437kxT7kcXU.jpg', 'https://image.tmdb.org/t/p/w500//u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg', 'https://image.tmdb.org/t/p/w500//7Ai8vNEv4zEveh12JViGikoVPVV.jpg', 'https://image.tmdb.org/t/p/w500//MBiKqTsouYqAACLYNDadsjhhC0.jpg', 'https://image.tmdb.org/t/p/w500//m48l3LFjwJ1UQqUdX37t09B38vy.jpg', 'https://image.tmdb.org/t/p/w500//7EuZIYEHLTu1G69maFLwg13u5iB.jpg', 'https://image.tmdb.org/t/p/w500//qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg', 'https://image.tmdb.org/t/p/w500//63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg', 'https://image.tmdb.org/t/p/w500//9ZedQHPQVveaIYmDSTazhT3y273.jpg', 'https://image.tmdb.org/t/p/w500//j9O2WXJqF45ynkng4SAsZ1h0OCt.jpg', 'https://image.tmdb.org/t/p/w500//q719jXXEzOoYaps6babgKnONONX.jpg', 'https://image.tmdb.org/t/p/w500//hPBJckYsL1UOsz44InZ2wYJyJTy.jpg', 'https://image.tmdb.org/t/p/w500//tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg', 'https://image.tmdb.org/t/p/w500//vg9C5LttsKBqoLuqeQvOXaeBGiD.jpg']
    },
    Comedy: {
      idx: 2,
      urls: ['https://image.tmdb.org/t/p/w500//oBgWY00bEFeZ9N25wWVyuQddbAo.jpg', 'https://image.tmdb.org/t/p/w500//32vLDKSzcCMh55zqqaSqqUA8naz.jpg', 'https://image.tmdb.org/t/p/w500//dkokENeY5Ka30BFgWAqk14mbnGs.jpg', 'https://image.tmdb.org/t/p/w500//msI5a9TPnepx47JUb2vl88hb80R.jpg', 'https://image.tmdb.org/t/p/w500//3mKMWP5OokB7QpcOMA1yl8BXFAF.jpg', 'https://image.tmdb.org/t/p/w500//keEnkeAvifw8NSEC4f6WsqeLJgF.jpg', 'https://image.tmdb.org/t/p/w500//8XZI9QZ7Pm3fVkigWJPbrXCMzjq.jpg', 'https://image.tmdb.org/t/p/w500//3RE9DNBCvuso5OPZPg71ryntNjx.jpg', 'https://image.tmdb.org/t/p/w500//hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg', 'https://image.tmdb.org/t/p/w500//tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg', 'https://image.tmdb.org/t/p/w500//19kfvGktytDZInUmpv3WlaHoTxP.jpg', 'https://image.tmdb.org/t/p/w500//A1Gy5HX3DKGaNW1Ay30NTIVJqJ6.jpg', 'https://image.tmdb.org/t/p/w500//qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg', 'https://image.tmdb.org/t/p/w500//3btDwus5VN5jOWfA9strpDJWwfj.jpg', 'https://image.tmdb.org/t/p/w500//gd9PcIgzV3YWa0c7iCECG1TuXX5.jpg', 'https://image.tmdb.org/t/p/w500//b1C0FuXp4wiPmHLVKq4kwtDMgK6.jpg', 'https://image.tmdb.org/t/p/w500//pMyCYtgfBmMisX3RFc5eH6zIV5Y.jpg', 'https://image.tmdb.org/t/p/w500//jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg', 'https://image.tmdb.org/t/p/w500//2xnf2ZaGXudvgBKPtVXMkNeooh1.jpg', 'https://image.tmdb.org/t/p/w500//aSGwXbaTMxUhrfXT6xyZKqoklfB.jpg']
    },
    Horror: {
      idx: 3,
      urls: ['https://image.tmdb.org/t/p/w500//b4gYVcl8pParX8AjkN90iQrWrWO.jpg', 'https://image.tmdb.org/t/p/w500//keEnkeAvifw8NSEC4f6WsqeLJgF.jpg', 'https://image.tmdb.org/t/p/w500//3RE9DNBCvuso5OPZPg71ryntNjx.jpg', 'https://image.tmdb.org/t/p/w500//95S6PinQIvVe4uJAd82a2iGZ0rA.jpg', 'https://image.tmdb.org/t/p/w500//xXI5Lg6mJLEesTggRJBrq50vrqU.jpg', 'https://image.tmdb.org/t/p/w500//iqO2sTFqm6XwEXmlLxKDX75RPjY.jpg', 'https://image.tmdb.org/t/p/w500//4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg', 'https://image.tmdb.org/t/p/w500//hGPGRRz6FTIRed1zestdWrV2Iwd.jpg', 'https://image.tmdb.org/t/p/w500//xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg', 'https://image.tmdb.org/t/p/w500//tmghT8HaddVIS9hEXIOI9GuDchi.jpg', 'https://image.tmdb.org/t/p/w500//b1C0FuXp4wiPmHLVKq4kwtDMgK6.jpg', 'https://image.tmdb.org/t/p/w500//xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg', 'https://image.tmdb.org/t/p/w500//9umVH1R5Z2I1Fqzg7qwMIR2gpKG.jpg', 'https://image.tmdb.org/t/p/w500//lcyKve7nXRFgRyms9M1bndNkKOx.jpg', 'https://image.tmdb.org/t/p/w500//wB8qqLIaYDkYEnjbS5hAJiTuYU6.jpg', 'https://image.tmdb.org/t/p/w500//kBKKXVbVwIP81u8Bnhguux48Sdn.jpg', 'https://image.tmdb.org/t/p/w500//7S9RvfMBWSTlUZ4VbxDY7oLeenk.jpg', 'https://image.tmdb.org/t/p/w500//wDmulF9Psmp00huLaLcqqjRHFdp.jpg', 'https://image.tmdb.org/t/p/w500//b2shaNA4F8zNIwoRYr33lPTiFfl.jpg', 'https://image.tmdb.org/t/p/w500//h7dZpJDORYs5c56dydbrLFkEXpE.jpg']
    },
    'Sci-fi': {
      idx: 4,
      urls: ['https://image.tmdb.org/t/p/w500//pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg', 'https://image.tmdb.org/t/p/w500//tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg', 'https://image.tmdb.org/t/p/w500//9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg', 'https://image.tmdb.org/t/p/w500//u74DFoZGTcZ8cuHO8nvQkCqXEVP.jpg', 'https://image.tmdb.org/t/p/w500//e4REOC6CZW8J6FslA4nRvdQXFXR.jpg', 'https://image.tmdb.org/t/p/w500//6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg', 'https://image.tmdb.org/t/p/w500//p9YDHJKvUoi7v2SCd3vLGPae1Xp.jpg', 'https://image.tmdb.org/t/p/w500//2W4ZvACURDyhiNnSIaFPHfNbny3.jpg', 'https://image.tmdb.org/t/p/w500//2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg', 'https://image.tmdb.org/t/p/w500//eLT8Cu357VOwBVTitkmlDEg32Fs.jpg', 'https://image.tmdb.org/t/p/w500//hGPGRRz6FTIRed1zestdWrV2Iwd.jpg', 'https://image.tmdb.org/t/p/w500//13B6onhL6FzSN2KaNeQeMML05pS.jpg', 'https://image.tmdb.org/t/p/w500//tmghT8HaddVIS9hEXIOI9GuDchi.jpg', 'https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', 'https://image.tmdb.org/t/p/w500//jDwZavHo99JtGsCyRzp4epeeBHx.jpg', 'https://image.tmdb.org/t/p/w500//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg', 'https://image.tmdb.org/t/p/w500//2xnf2ZaGXudvgBKPtVXMkNeooh1.jpg', 'https://image.tmdb.org/t/p/w500//k68nPLbIST6NP96JmTxmZijEvCA.jpg', 'https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg', 'https://image.tmdb.org/t/p/w500//4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg']
    },
    Mystery: {
      idx: 5,
      urls: ['https://image.tmdb.org/t/p/w500//xCEg6KowNISWvMh8GvPSxtdf9TO.jpg', 'https://image.tmdb.org/t/p/w500//95S6PinQIvVe4uJAd82a2iGZ0rA.jpg', 'https://image.tmdb.org/t/p/w500//wcrjc1uwQaqoqtqi67Su4VCOYo0.jpg', 'https://image.tmdb.org/t/p/w500//iqO2sTFqm6XwEXmlLxKDX75RPjY.jpg', 'https://image.tmdb.org/t/p/w500//tmghT8HaddVIS9hEXIOI9GuDchi.jpg', 'https://image.tmdb.org/t/p/w500//lcyKve7nXRFgRyms9M1bndNkKOx.jpg', 'https://image.tmdb.org/t/p/w500//8jDvtdH327I8TgX3UPdkAsZF1dA.jpg', 'https://image.tmdb.org/t/p/w500//sCoG0ibohbPrnyomtzegSuBL40L.jpg', 'https://image.tmdb.org/t/p/w500//m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg', 'https://image.tmdb.org/t/p/w500//h7dZpJDORYs5c56dydbrLFkEXpE.jpg', 'https://image.tmdb.org/t/p/w500//7EGElXVSNnqcPjuhXPd6UVUX1rD.jpg', 'https://image.tmdb.org/t/p/w500//zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg', 'https://image.tmdb.org/t/p/w500//ode14q7WtDugFDp78fo9lCsmay9.jpg', 'https://image.tmdb.org/t/p/w500//kxc25B05Gq4CbCoWbyTFf9iF0wn.jpg', 'https://image.tmdb.org/t/p/w500//8F9xUvb1JMWUMkFV2Yq3aiueAbq.jpg', 'https://image.tmdb.org/t/p/w500//suORidtGKPO6tWwNqiwGvNo85z3.jpg', 'https://image.tmdb.org/t/p/w500//s836PRwHkLjrOJrfW0eo7B4NJOf.jpg', 'https://image.tmdb.org/t/p/w500//4WT7zYFpe0fsbg6TitppiHddWAh.jpg', 'https://image.tmdb.org/t/p/w500//2LwamrHAmxqEHsT9JViFJxT08Ek.jpg', 'https://image.tmdb.org/t/p/w500//5aL71e0XBgHZ6zdWcWeuEhwD2Gw.jpg']
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
  const far = 100
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  const cameraStartingPos = {x: 0, y:0, z: 10}
  const cameraTargetStartDist = 50
  const cameraTargetStart = {x: 0, y: 0, z: cameraTargetStartDist}
  const cameraScrollDist = 100
  const cameraZoominValue = 0.92
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
	const radius = 60
  const movieRotationSpeed = 0.0025
  const moviesLootAtZ = 20
  const movieEnlargeScale = {value: 1, goal: 0.3}
  let movieRotation = true
  let moviesFaceCam = true
  let pickedMovieFaceCam = false
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
      const tempX = (event.clientX/window.innerWidth - 0.5) * 2
      const tempY = (event.clientY/window.innerHeight - 0.5) * 2
      rotateScreenOnMouse(tempX, tempY)
      return
    }
    event.preventDefault();
    const deltaX = event.clientX - mouseVector.x
    const deltaY = event.clientY - mouseVector.y
    mouseVector.x = event.clientX
		mouseVector.y = event.clientY
    rotateMovie(deltaX, deltaY)
  }
  function rotateScreenOnMouse(tempX, tempY) {
    // console.log(tempX, tempY)
    // camera.rotation.y = tempX * 0.001
    // camera.rotation.x = tempY * 0.001
    // camera.updateProjectionMatrix()
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
      if (cameraScrollIdx === 5) {
        return
      }
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
      if (cameraScrollIdx === 0) {
        return
      }
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

        // picked Movie Faces Cam
        pickedMovieFaceCam = true

        // stop movie rotation
        movieRotation = false
				
				document.body.classList.add('is-pointed')
        picked_id = intersects[0].object.id
				
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
					x: Math.cos(targetObj.rad) * radius * cameraZoominValue, 
					y: targetObj.position.y, 
					z: Math.sin(targetObj.rad) * radius * cameraZoominValue,
					onUpdate:function(){
						camera.updateProjectionMatrix();
					}
				})
        // make movie smaller to prevent overlap
        movies.forEach((movie) => {
          if (movie.id === picked_id) {
            gsap.to(movieEnlargeScale, {
              duration: 1,
              value: movieEnlargeScale.goal,
              onUpdate: function () {
                console.log(movieEnlargeScale.value)
                movie.scale.set(movieEnlargeScale.value, movieEnlargeScale.value, movieEnlargeScale.value)
              }
            })
          }
        })
			}
		}
	}
				
	function resetPickImage() {
			document.body.classList.remove('is-pointed');
      
      // movies face camera again
      moviesFaceCam = true

      // picked Movie Faces Cam
      pickedMovieFaceCam = false
      
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
            y: formerMovieRotation.y,
            onUpdate: function () {
              movie.rotation.y = tempMovieRotation.y
            }
          })
          gsap.to(movieEnlargeScale, {
            duration: 1,
            value: 1,
            onUpdate: function () {
              console.log(movieEnlargeScale.value)
              movie.scale.set(movieEnlargeScale.value, movieEnlargeScale.value, movieEnlargeScale.value)
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
      if (moviesFaceCam && movie.id !== picked_id) {
        movie.lookAt(camera.position.x, camera.position.y, moviesLootAtZ)
      }
      if (pickedMovieFaceCam && moviesFaceCam && movie.id === picked_id) {
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
