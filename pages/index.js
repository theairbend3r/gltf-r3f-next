import "twin.macro";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div tw="flex flex-col w-full h-screen">
      <main tw="flex flex-col h-full w-full">
        <Canvas
          tw="h-full w-full bg-purple-400"
          colorManagement
          camera={{ position: [0, 0, 120], fov: 70 }}
        >
          {/* <Model /> */}
        </Canvas>
      </main>
    </div>
  );
}
