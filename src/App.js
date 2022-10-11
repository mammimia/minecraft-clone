import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FPV } from "./component/FPV";
import { Ground } from "./component/Ground";
import { Player } from "./component/Player";
import { Cubes } from "./component/Cubes";
import { TextureSelector } from "./component/TextureSelector";
import { Menu } from "./component/Menu";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Ground />
          <Cubes />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
