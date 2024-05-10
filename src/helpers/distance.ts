// import { Vector3 } from "three";

import { Vector } from "@dimforge/rapier3d-compat";

export const distance2Points = (p1: Vector, p2: Vector) => {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = p1.z - p2.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}