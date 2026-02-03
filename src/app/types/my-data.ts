export interface MyData {
    dob: string;
    g: string;
    q: {
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
    location: string;
}
