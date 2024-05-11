import { Vector3 } from "three";

export interface Checkpoint {
    id:number;
    userEmail: string;
    level: number;
    score: number;
    position: Vector3;
    timestamp: number;
}