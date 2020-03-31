import { environment } from 'src/environments/environment.prod';

const baseUrl= environment.apiUrl;
export const apis= {
    auth: {
        login: baseUrl+ '/auth/login',
        logout: baseUrl+ '/auth/logout',
        verify_user: baseUrl+ '/auth/verify',
        verify_user_code: baseUrl+ '/auth/verifycode',
        change_password: baseUrl+ '/auth/changepassword',
        forgotpassword: baseUrl+ '/auth/forgotpassword',
        verify_otp: baseUrl+ '/auth/otp',
    },
    agents: {
        profile: baseUrl+ '/sap/agentprofile',
        pub_details: baseUrl+ '/sap/publicationmaster'
    },
    pubications: {
        pubications: baseUrl+ '/publications',
        pubications_sub_agents: baseUrl+ '/sap/agentsubagentdetail',
    },
    common: {
    }
}

export default apis;