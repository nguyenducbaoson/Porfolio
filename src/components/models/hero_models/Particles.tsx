import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

type Particle = {
  position: [number, number, number]
  speed: number
}

interface ParticlesProps {
  count?: number
}

const Particles = ({ count = 200 }: ParticlesProps) => {
  const mesh = useRef<THREE.Points>(null)

  const particles: Particle[] = useMemo(() => {
    const temp: Particle[] = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      })
    }
    return temp
  }, [count])

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0]
      arr[i * 3 + 1] = p.position[1]
      arr[i * 3 + 2] = p.position[2]
    })
    return arr
  }, [particles, count])

  useFrame(() => {
    const geometry = mesh.current?.geometry as THREE.BufferGeometry
    const positionAttr = geometry.attributes.position as THREE.BufferAttribute
    const posArray = positionAttr.array as Float32Array

    for (let i = 0; i < count; i++) {
      let y = posArray[i * 3 + 1]
      y -= particles[i].speed
      if (y < -2) y = Math.random() * 10 + 5
      posArray[i * 3 + 1] = y
    }

    positionAttr.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  )
}

export default Particles
