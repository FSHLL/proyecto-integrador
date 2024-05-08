import { Vector3 } from "three";

export interface Bullet {
    id: string;
    position: Vector3;
    angle: number;
}