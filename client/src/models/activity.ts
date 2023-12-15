import { api } from "./session";
import type { User } from "./users"
import { ref } from "vue";
import data from "@/data/exercise.json"
import { computed, reactive } from "vue";


export interface Entry {
    id: number;
    exerciseType: string
    time: number
    description: string
    again: boolean
    
}
/**
 * [
 *  {exercises: string, time: number}
 * ]
 */


export function getEntries(): Promise < Entry[] > {
    return api("entries");
}
/*export const addEntry = (id: number, exerciseType: string, time: number, description: string, again: boolean) => {
    let insertedEntry : Boolean = false;
    let entry = {
        id: id,
        exerciseType: exerciseType,
        time: time,
        description: description,
        again: again
    }
    entryList.entries.forEach((element: any) => {
        if(element.id === id){
            element.entries.push(entry);
            insertedEntry = true;
        }
    });

}*/