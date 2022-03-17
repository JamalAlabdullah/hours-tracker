import { User, UserStatus } from './types';

const mockedUsers: User[] = [
    {
        "username": "jamal",
        "password": "123abc"
    },
    {
        "username": "sam",
        "password": "123anc"
    }
]


const login = async (username: string, password: string): Promise<UserStatus> => {
    for await (const user of mockedUsers) {
        if (user.username === username) {
            if (user.password === password) {
                return {
                    success: true,
                    reason: "User credentials are correct"
                }
            }
            return {
                success: false,
                reason: "Password is not matching"
            }
        }
      }
      
    return {
        success: false,
        reason: "user not found"
    }
}

export default login;


