export const CONSTANTS={
    AUTH_PATHS:{
        LOGIN:'login',
        SIGNUP:'student-signup',
        FORGOT_PASS:'forgot',
        RESET_PASS:'reset'
    }
}

export const API_PATHS = {
    GET_USER:'/',
    POST_USER:{
        LOGIN:'login',
        SIGNUP:'student-signup',
        FORGOT_PASSWORD:'forgot'
    }
}
export const REGEX={
    PASSWORD:/^(?=.*[A-Za-z])(?=(.*[\d]){1,})(?=.*?[^\w\s]).{8,}$/
}