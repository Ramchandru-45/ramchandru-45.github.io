export interface MyData {
    firstname: string;
    lastname: string;
    dob: string;
    gender: string;
    education: {
        Bachelor: {
            degree: string;
            institution: string;
            yop: string;
        };
        HigherSecondary: {
            degree: string;
            institution: string;
            yop: string;
        };
        Secondary: {
            degree: string;
            institution: string;
            yop: string;
        };
    };
    profile: string;
    about: string;
}
