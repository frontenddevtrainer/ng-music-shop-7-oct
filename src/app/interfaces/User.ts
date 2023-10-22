export interface IUserRegisterPayload {
    email:      string;
    firstName:  string;
    lastName:   string;
    dob:        string;
    password:   string;
    favSingers: string[];
    confirmPassword: string
}

export interface IUserRegisterResponsePayload {
    accessToken : string,
    user: Omit<IUserRegisterPayload, 'password' | 'confirmPassword'>
}

