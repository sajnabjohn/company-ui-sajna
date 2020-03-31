import { Timestamp } from 'rxjs';

export interface User {
    success: string,
    message: string,
    token: string,
    user: {
        code: string,
        role: string
    },
    expires: {
        expires_in: string,
        expires_timestamp: number
    }
}