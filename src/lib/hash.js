



import bcrypt from "bcrypt";


export function hash(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

export function compare(password, hash) {
    try {
        if (!password || !hash) return false;
        return bcrypt.compareSync(password, hash);
    } catch (error) {
        console.error("Error comparing password:", error);
        return false;
    }
}