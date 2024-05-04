import { Vector3 } from "three";

export interface Checkpoint {
    id:number
    level: number;
    score: number;
    position: Vector3;
    timestamp: number;
}