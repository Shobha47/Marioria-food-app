// "use client";

// import React, { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Stars } from "@react-three/drei";

// function Model() {
//   const { scene } = useGLTF("/modal/scene.gltf");
//   const modelRef = useRef();

//   useFrame((state, delta) => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += delta * 0.2;
//     }
//   });

//   return <primitive ref={modelRef} object={scene} scale={2} />;
// }

// export default function Planet() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5], fov: 50 }}
//       style={{ height: "500px", width: "100%" }}
//     >
//       {/* 🌌 Dark blue background */}
//       <color attach="background" args={["#020617"]} />

//       {/* ⭐ Stars */}
//       <Stars
//         radius={100}     // how far stars spread
//         depth={50}
//         blink={true}
//         count={5000}     // number of stars
//         factor={4}       // size
//         saturation={0}
//         fade
//         speed={1}
//       />

//       {/* Lighting */}
//       <ambientLight intensity={1} />
//       <directionalLight position={[5, 5, 5]} />

//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>

//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// }