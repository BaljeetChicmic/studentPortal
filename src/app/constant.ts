export const CONSTANTS={
    AUTH_PATHS:{
        LOGIN:'login',
        SIGNUP:'signup',
        FORGOT_PASS:'forgot',
        RESET_PASS:'reset',
        MAIN: 'main',
        AUTH:'auth'
    },
    MAIN_PATH:{
        STUDENT_LIST:'studentList',
        MY_STUDENT:'myStudent',
        DASHBOARD:'dashboard',
        NAVIGATION:''
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

export enum ROLE{
    STUDENT,
    TEACHER
}