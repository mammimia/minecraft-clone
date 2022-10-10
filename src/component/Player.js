import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export const Player = () => {
  const { camera } = useThree();
  const [playerRef, playerApi] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    playerApi.velocity.subscribe((v) => {
      velocity.current = v;
    });
  }, [playerApi.velocity]);

  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    playerApi.position.subscribe((p) => {
      pos.current = p;
    });
  }, [playerApi.position]);

  useFrame(() => {
    // This hook will run on every frame
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
  });

  return <mesh ref={playerRef}></mesh>;
};
