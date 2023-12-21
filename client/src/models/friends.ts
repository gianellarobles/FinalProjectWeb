import { api } from './session';
import { type User } from './users';

export interface Friends {
    id?: number,
    username: string, 
    name: string,
    email: string,
    photo?: string,
    posts?: Posts[],
    friends?: Friends[]
}
export interface Posts{
    id?: number,
    username: string,
    name: string,
    text: string,
    time: number,
    photo?: string,
    likes?: number,
    comments?: number,
    friends?: User 
}

export function getFriends(): Promise< Friends[]> {
    return api('friends'); 
}
export function getPosts(): Promise<Posts[]> {
    return api('posts');
}
export function getPostsByUsername(username: string): Promise<Posts[]> {
    return api('posts/' + username);
}   
export function getFriendsByUsername(username: string): Promise<Friends[]> {
    return api('friends/' + username);
}   
export function createPost(post: Posts): Promise<Posts> {
    return api('posts', post, 'POST');
}
export function addFriend(friend: Friends): Promise<Friends> {
    return api('friends', friend, 'POST');
}
export function deletePost(id: number): Promise<Posts> {
    return api('posts/' + id, {}, 'DELETE');
}
export function deleteFriend(id: number): Promise<Friends> {    
    return api('friends/' + id, {}, 'DELETE');
}

