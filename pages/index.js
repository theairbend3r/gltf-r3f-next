import "twin.macro";
import { Canvas } from "@react-three/fiber";
import Statue from "./../components/Statue";
import Lights from "./../components/Lights";
import Floor from "./../components/Floor";
import { Suspense } from "react";
import { Html, OrbitControls, softShadows } from "@react-three/drei";

softShadows();

const HtmlContent = () => {
  return (
    <Html fullscreen>
      <div tw="flex flex-row items-center justify-center p-2">
        <h1 tw="text-gray-100 bg-gray-900 rounded">Mlipnos</h1>
      </div>
    </Html>
  );
};

const Model = () => {
  return (
    <Canvas
      tw="h-full w-full"
      colorManagement
      camera={{ position: [5, 0, 0], fov: 20 }}
    >
      <Lights />
      <Suspense fallback={null}>
        <Statue />
      </Suspense>
      <Floor />
      <HtmlContent />
      <OrbitControls />
    </Canvas>
  );
};
export default function Home() {
  return (
    <div tw="flex flex-col w-full h-screen p-2 m-0 bg-gradient-to-t from-gray-400 to-gray-100 ">
      <main tw="flex flex-col h-full w-full">
        <section tw="flex flex-row justify-center border border-gray-900 border-2">
          <h1 tw="text-lg sm:text-xl md:text-2xl lg:text-3xl">Statue in 3D</h1>
        </section>
        <Model />
        <section tw="flex flex-row justify-center border p-2 mb-10">
          Mlipnos is a singer/songwriter who rocked hard. They are a gem of a
          person with shoulders like boulders. Mlipnos was stoned to creation
          with pebbles and enjoyes rotating in space.
        </section>
      </main>
      <footer tw="flex flex-row justify-center text-sm text-gray-600">
        footer frfr, 2022
      </footer>
    </div>
  );
}
