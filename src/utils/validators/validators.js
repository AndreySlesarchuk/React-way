export const required = value => {
    if (value) return undefined;

    return "Field is required";
}

export const maxLength30 = value => {
    if (value && value.length > 30) return "Max length is 30 symbols";

    return undefined;
}

export const minLength2 = value => {
    if (value && value.length < 2) return "Mix length is 2 symbols";

    return undefined;
}