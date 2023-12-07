/* B"H
*/

import { api } from "./session";

export interface User {
  id?: number,
  username: string,
  name: string,
  email: string,
  password: string,
  role: "admin" | "user"
}

export function getUsers(): Promise< User[]> {
  return api("users"); 
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.email === email );
}
export async function getUserById(id: number): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.id === id );
}
