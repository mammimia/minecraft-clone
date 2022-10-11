import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube";

// This component is rendering cubes which is stored in useStore hook
export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);

  return cubes.map(({ key, pos, texture }) => {
    return <Cube key={key} position={pos} texture={texture} />;
  });
};
