"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function MedicalDeviceModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body - medical device chassis */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 1.5, 0.5]} />
        <meshStandardMaterial
          color="#14B8A6"
          metalness={0.8}
          roughness={0.2}
          emissive="#14B8A6"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Screen/Display */}
      <mesh position={[0, 0, 0.26]} castShadow>
        <boxGeometry args={[1.6, 1.1, 0.02]} />
        <meshStandardMaterial
          color="#06B6D4"
          metalness={0.9}
          roughness={0.1}
          emissive="#06B6D4"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Sensor modules (top) */}
      <mesh position={[-0.6, 0.9, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 32]} />
        <meshStandardMaterial
          color="#A855F7"
          metalness={0.9}
          roughness={0.1}
          emissive="#A855F7"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0.6, 0.9, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 32]} />
        <meshStandardMaterial
          color="#A855F7"
          metalness={0.9}
          roughness={0.1}
          emissive="#A855F7"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Side connectors */}
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
        <meshStandardMaterial
          color="#06B6D4"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
        <meshStandardMaterial
          color="#06B6D4"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Control buttons */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <mesh key={i} position={[x, -0.9, 0.26]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.5}
            roughness={0.3}
            emissive="#FFFFFF"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}

      {/* Indicator lights */}
      {[-0.7, -0.5, -0.3].map((x, i) => (
        <mesh key={`light-${i}`} position={[x, 0.6, 0.26]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial
            color={i === 0 ? "#10B981" : i === 1 ? "#FBBF24" : "#EF4444"}
            metalness={0.3}
            roughness={0.2}
            emissive={i === 0 ? "#10B981" : i === 1 ? "#FBBF24" : "#EF4444"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function MedicalDevice3D() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14B8A6" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#A855F7" />

        {/* 3D Model */}
        <MedicalDeviceModel />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
