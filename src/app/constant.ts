export const CONSTANTS={
    AUTH_PATHS:{
        LOGIN:'login',
        SIGNUP:'student-signup',
        FORGOT_PASS:'forgot',
        RESET_PASS:'reset',
        STUDENT_LIST:'studentList',
        MY_STUDENT:'myStudent',
        DASHBOARD:'dashboard'

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