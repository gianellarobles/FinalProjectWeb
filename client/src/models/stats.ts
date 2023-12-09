import { type Entry } from "@/models/activity";
import { type User } from "@/models/users";
import { computed, reactive } from "vue";
import { api } from "./session";


export type Stats = {
    user: User,
    entries: Entry[]
}

const state = reactive<Stats>({
    user: {
        id: 0,
        username: "",
        name: "",
        email: "",
        password: "",
        role: "user"
    },
    entries: []
});

export function getStats(): Promise<Stats> {
    return api("stats");
}

