import { ISettingsState } from "../app/store/slice/SettingsSlice"
import { Tags } from "./IProduct"

export interface IUser {
    id: string
    firstName: string
    lastName: string
    email: string
    age: number
    preferences: Tags[]
    photo: string
    city: string
    country: string
    house_street: string
    house_number: number
    settings: ISettingsState
}

