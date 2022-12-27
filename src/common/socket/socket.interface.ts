export enum UserRole {
    STUDENT = 0,
    TEACHER = 1,
}
export interface IAuthUser {
    id: string
    name: string
    email: string
    role: UserRole
}
export interface ILocation {
    x: number
    y: number
}
export interface IUserJoinMainScreen {
    user: IAuthUser
    location: ILocation
}
