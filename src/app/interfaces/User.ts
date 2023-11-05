

export interface IUserLoginPayload {
    email:      string;
    password:   string;
}

export interface IUserRegisterPayload {
    email:      string;
    firstname:  string;
    lastname:   string;
    dob:        string;
    password:   string;
    favSingers: string[];
    confirmPassword: string,
    id: number
}

export interface IUserRegisterResponsePayload {
    accessToken : string,
    user: Omit<IUserRegisterPayload, 'password' | 'confirmPassword'>
}

