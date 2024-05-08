import { Checkpoint } from "@/Interfaces/Checkpoint";
import { db } from "@/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const checkPointsRef = collection(db, "checkpoints");

export const createCheckpoint = async (checkpoint: Checkpoint) => {
    try {
        const dbCheckpoint = await getDocs(
            query(
                checkPointsRef,
                where('userEmail', '==', checkpoint.userEmail),
                where('id', '==', checkpoint.id),
                where('level', '==', checkpoint.level),
            )
        );
        if (dbCheckpoint.empty) {
            const res = await addDoc(checkPointsRef, JSON.parse(JSON.stringify(checkpoint)));
            return res;
        }
        return dbCheckpoint.docs[0]
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const readCheckpoints = async (userEmail: string): Promise<Checkpoint[]> => {
    try {
        const checkpoints = await getDocs(query(checkPointsRef, where('userEmail', '==', userEmail)));

        return checkpoints.docs.map((doc) => doc.data()) as Checkpoint[];
    } catch (error) {
        console.log(error);
        return []
    }
};