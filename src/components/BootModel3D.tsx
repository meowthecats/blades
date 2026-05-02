import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder, RoundedBox, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

function Wheel({ position, isIdle }: { position: [number, number, number], isIdle: boolean }) {
  const wheelRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (wheelRef.current) {
      // Subtle spinning when idle
      const baseSpeed = isIdle ? 0.5 : 2;
      wheelRef.current.rotation.z -= delta * baseSpeed;
    }
  });

  return (
    <group ref={wheelRef} position={position}>
      {/* Tire Outer Profile */}
      <Cylinder args={[0.3, 0.3, 0.12, 32]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </Cylinder>
      {/* Outer PU Core */}
      <Cylinder args={[0.26, 0.26, 0.125, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhysicalMaterial color="#f97316" transparent opacity={0.8} roughness={0.2} transmission={0.6} clearcoat={1} clearcoatRoughness={0.1} />
      </Cylinder>
      {/* Spoke pattern */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Box key={i} args={[0.48, 0.08, 0.05]} rotation={[0, (i * Math.PI) / 3, 0]}>
             <meshStandardMaterial color="#ea580c" roughness={0.6} />
          </Box>
        ))}
      </group>
      {/* Bearing Assembly */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        {/* Outer race */}
        <Cylinder args={[0.11, 0.11, 0.13, 32]}>
          <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.2} />
        </Cylinder>
        {/* Bearing Shield */}
        <Cylinder args={[0.085, 0.085, 0.135, 32]}>
          <meshStandardMaterial color="#ef4444" roughness={0.6} />
        </Cylinder>
        {/* Inner race */}
        <Cylinder args={[0.06, 0.06, 0.14, 32]}>
          <meshStandardMaterial color="#cbd5e1" metalness={1} roughness={0.1} />
        </Cylinder>
        {/* Axle hole */}
        <Cylinder args={[0.045, 0.045, 0.145, 16]}>
          <meshStandardMaterial color="#020617" />
        </Cylinder>
      </group>
    </group>
  );
}

function SkatesModel({ rotateSpeed }: { rotateSpeed: number }) {
  const group = useRef<THREE.Group>(null);
  const isIdle = rotateSpeed === 0;

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Extruded Frame Structure */}
      <RoundedBox args={[3.1, 0.45, 0.25]} position={[0, 0.5, 0]} radius={0.05} smoothness={4} castShadow>
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.3} />
      </RoundedBox>
      <RoundedBox args={[3.0, 0.35, 0.15]} position={[0, 0.5, 0.18]} radius={0.02} smoothness={2}>
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.5} />
      </RoundedBox>
      <RoundedBox args={[3.0, 0.35, 0.15]} position={[0, 0.5, -0.18]} radius={0.02} smoothness={2}>
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.5} />
      </RoundedBox>

      {/* Frame Mounting blocks */}
      <Box args={[0.8, 0.2, 0.4]} position={[-0.8, 0.8, 0]} castShadow>
        <meshStandardMaterial color="#0f172a" />
      </Box>
      <Box args={[0.8, 0.2, 0.4]} position={[0.8, 0.8, 0]} castShadow>
        <meshStandardMaterial color="#0f172a" />
      </Box>

      {/* Axles */}
      {[-1.2, -0.4, 0.4, 1.2].map((x, i) => (
        <Cylinder key={'axle-'+i} args={[0.04, 0.04, 0.4, 16]} position={[x, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <meshStandardMaterial color="#94a3b8" metalness={0.8} />
        </Cylinder>
      ))}

      {/* Wheels */}
      {[-1.2, -0.4, 0.4, 1.2].map((x, i) => (
        <Wheel key={i} position={[x, 0.2, 0]} isIdle={isIdle} />
      ))}

      {/* Boot Lower Shell */}
      <RoundedBox args={[3.2, 0.9, 1.05]} position={[0.1, 1.25, 0]} radius={0.2} smoothness={4} castShadow>
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </RoundedBox>

      {/* Boot Toe cap */}
      <RoundedBox args={[1.2, 0.7, 0.95]} position={[1.2, 1.15, 0]} radius={0.3} smoothness={4} castShadow>
        <meshStandardMaterial color="#0f172a" roughness={0.5} />
      </RoundedBox>

      {/* Boot Heel shock absorber */}
      <Box args={[0.8, 0.2, 0.9]} position={[-1.0, 0.9, 0]} castShadow>
        <meshStandardMaterial color="#f97316" roughness={0.9} />
      </Box>

      {/* Boot Cuff / Ankle */}
      <RoundedBox args={[1.3, 1.4, 1.15]} position={[-0.7, 2.3, 0]} radius={0.2} smoothness={4} castShadow>
        <meshStandardMaterial color="#1e293b" roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[1.4, 0.5, 1.25]} position={[-0.7, 2.9, 0]} radius={0.1} smoothness={4} castShadow>
        <meshStandardMaterial color="#0f172a" roughness={0.4} />
      </RoundedBox>

      {/* Cuff Hinge Bolts */}
      <group position={[-0.3, 1.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        {/* Outer Washer */}
        <Cylinder args={[0.12, 0.12, 1.2, 32]}>
           <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.5} />
        </Cylinder>
        {/* Bolt Head */}
        <Cylinder args={[0.08, 0.08, 1.22, 32]}>
           <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
        </Cylinder>
        {/* Hex Socket */}
        <Cylinder args={[0.04, 0.04, 1.23, 6]}>
           <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </Cylinder>
      </group>

      {/* Frame Mounting Bolts (Vertical) */}
      <group position={[-0.8, 0.8, 0]}>
         <Cylinder args={[0.08, 0.08, 0.22, 32]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
         </Cylinder>
         {/* Hex Socket */}
         <Cylinder args={[0.04, 0.04, 0.23, 6]}>
            <meshStandardMaterial color="#0f172a" roughness={0.8} />
         </Cylinder>
      </group>
      <group position={[0.8, 0.8, 0]}>
         <Cylinder args={[0.08, 0.08, 0.22, 32]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
         </Cylinder>
         {/* Hex Socket */}
         <Cylinder args={[0.04, 0.04, 0.23, 6]}>
            <meshStandardMaterial color="#0f172a" roughness={0.8} />
         </Cylinder>
      </group>

      {/* Liner sticking out */}
      <RoundedBox args={[0.9, 1.8, 0.85]} position={[-0.65, 2.6, 0]} radius={0.2} smoothness={4}>
        <meshStandardMaterial color="#cbd5e1" roughness={0.9} />
      </RoundedBox>
      <RoundedBox args={[0.8, 2.2, 0.7]} position={[-0.6, 2.6, 0]} radius={0.2} smoothness={4}>
        <meshStandardMaterial color="#94a3b8" roughness={0.9} />
      </RoundedBox>

      {/* 45 Degree Buckle */}
      <group position={[-0.2, 1.5, 0]} rotation={[0, 0, 0.2]}>
        <Box args={[0.3, 0.1, 1.2]}>
          <meshStandardMaterial color="#475569" roughness={0.8} />
        </Box>
        <Box args={[0.15, 0.15, 1.22]}>
          <meshStandardMaterial color="#cbd5e1" metalness={0.7} />
        </Box>
        {/* Buckle Logo/Branding */}
        <group position={[0, 0.08, 0.62]} rotation={[Math.PI / 2, 0, 0]}>
           <Torus args={[0.03, 0.01, 16, 32]}>
             <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
           </Torus>
           <Sphere args={[0.015, 16, 16]}>
             <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
           </Sphere>
        </group>
        <group position={[0, 0.08, -0.62]} rotation={[Math.PI / 2, 0, 0]}>
           <Torus args={[0.03, 0.01, 16, 32]}>
             <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
           </Torus>
           <Sphere args={[0.015, 16, 16]}>
             <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
           </Sphere>
        </group>
      </group>

      {/* Top Buckle */}
      <group position={[-0.7, 2.9, 0]}>
        <Box args={[0.2, 0.1, 1.3]}>
          <meshStandardMaterial color="#475569" roughness={0.8} />
        </Box>
        <Box args={[0.15, 0.15, 1.32]} position={[0.2, 0, 0]}>
          <meshStandardMaterial color="#cbd5e1" metalness={0.7} />
        </Box>
        {/* Buckle Logo */}
        <group position={[0.2, 0.08, 0.67]} rotation={[Math.PI / 2, 0, 0]}>
           <Torus args={[0.03, 0.01, 16, 32]}>
             <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
           </Torus>
           <Sphere args={[0.015, 16, 16]}>
             <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
           </Sphere>
        </group>
        <group position={[0.2, 0.08, -0.67]} rotation={[Math.PI / 2, 0, 0]}>
           <Torus args={[0.03, 0.01, 16, 32]}>
             <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
           </Torus>
           <Sphere args={[0.015, 16, 16]}>
             <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
           </Sphere>
        </group>
        {/* Buckle Screw Detail */}
        <Cylinder args={[0.03, 0.03, 1.35, 32]} position={[-0.05, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <meshStandardMaterial color="#94a3b8" metalness={0.9} />
        </Cylinder>
        <Cylinder args={[0.015, 0.015, 1.36, 6]} position={[-0.05, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <meshStandardMaterial color="#0f172a" />
        </Cylinder>
      </group>

      {/* Laces placeholder */}
      <group position={[0.5, 1.5, 0]} rotation={[0, 0, -0.4]}>
         {[0, 1, 2, 3].map(i => (
           <Box key={'lace'+i} args={[0.05, 0.05, 0.8]} position={[i * -0.2, i * 0.2, 0]}>
             <meshStandardMaterial color="#f8fafc" />
           </Box>
         ))}
      </group>
    </group>
  );
}

export default function BootModel3D() {
  const [rotateSpeed, setRotateSpeed] = useState(1.5);

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing group">
      <Canvas shadows camera={{ position: [-4, 3, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize={1024}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <pointLight position={[0, 2, 5]} intensity={0.5} />
        
        <SkatesModel rotateSpeed={rotateSpeed} />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={true}
          autoRotate={true}
          autoRotateSpeed={rotateSpeed}
        />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onPointerDown={(e) => e.stopPropagation()}>
        <label htmlFor="rotateSpeed" className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
          Rotation Speed: {rotateSpeed.toFixed(1)}x
        </label>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-slate-500 font-mono">0x</span>
          <input 
            id="rotateSpeed"
            type="range" 
            min="0" 
            max="10" 
            step="0.5" 
            value={rotateSpeed} 
            onChange={(e) => setRotateSpeed(parseFloat(e.target.value))}
            className="w-24 sm:w-32 accent-blue-500 cursor-pointer"
          />
          <span className="text-[9px] text-slate-500 font-mono">10x</span>
        </div>
      </div>
    </div>
  );
}
