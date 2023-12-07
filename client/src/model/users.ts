/* B"H
*/

import { api } from './session';

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

export async function getUserByUsername(username: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.username === username );
}

export async function createUser(user: User): Promise<User> {
  return api("users", { method: "POST", body: JSON.stringify(user) });
}

