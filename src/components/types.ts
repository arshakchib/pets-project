export interface Dog {
    id: string;
    img: string;
    name: string;
    age: number;
    zip_code: string;
    breed: string;
}

export interface LoginFormValues {
    name: string;
    email: string;
}

export type FieldConfig = {
    name: keyof LoginFormValues;
    label: string;
    type: string;
    validate: (value: string) => string | undefined;
};

export enum SortOrder {
    Ascending = 'asc',
    Descending = 'desc',
}
