import { NearestFilter, TextureLoader } from "three";
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(grassImg);

// To make it more pixel look
dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;

export { dirtTexture, grassTexture, glassTexture, woodTexture, logTexture, groundTexture };