import { type Entry } from "@/models/activity";
import { type User } from "@/models/users";
import { computed, reactive } from "vue";
import { api } from "./session";


export type Stats = {
    user: User,
    entries: Entry[]
}

export function getStats(): Promise<Stats> {
    return api("stats");
}


