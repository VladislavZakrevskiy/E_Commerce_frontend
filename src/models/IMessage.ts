import { IUser } from "./IUser"

export interface IMessage {
    id: string
    media?: string[]
    text: string
    chat_id: string
    from_id: string
    to_id: string
    created_at: number
    from_user: IUser
}