import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import { Model } from "./context/Model";
// import BoxContainer from "./BoxContainer";
import { Lights } from "./controls/Lights";

const App = () => {
  
  return (
    <div className="App h-screen">
      <Canvas
        camera={{ position: [0, -1, 10] }}
        style={{ overflow: "hidden" /* background: "gray" */ }}
      >
        <color attach="background" args={["#161c24"]}></color>
        <Lights />
        <Stars
          radius={10}
          depth={5}
          count={5000}
          factor={400}
          saturation={100}
          fade={true}
          speed={1}
        />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        {/* <Sparkles
          count={5000}
          speed={10}
          // opacity={}
          color={"black"}
          size={100}
        /> */}
        <Suspense fallback={null}>
          <Model url="chair/armchairYellow.gltf" />
        </Suspense>

      </Canvas>
    </div>
  );
}

export default App

