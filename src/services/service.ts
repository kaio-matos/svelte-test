import axios from "axios";

const service = axios.create({
    baseURL: 'https://randomuser.me/api/'
})

export interface IUser {
    cell: string,
    dob: { age: number, date: string },
    email: string,
    gender: 'female' | 'male',
    id: { name: string, value: string },
    location: any,
    login: { username: string },
    name: { first: string, last: string, title: string }
    nat: string,
    phone: string,
    picture: {large: string, medium: string, thumbnail: string}
    registered: {age: number, date: string}
}

class UserService {
    async index (): Promise<IUser[]> {
        const response = await service.get('/', {
            params: {
                results: 100
            }
        })
        return response.data.results
    }

    async getRandomUser (): Promise<IUser> {
        const sleep = () => new Promise((resolve) => setTimeout(() => resolve(null), 1000))
        await sleep()
        const response = await service.get('/')
        return response.data.results[0]
    }
}

export default new UserService()