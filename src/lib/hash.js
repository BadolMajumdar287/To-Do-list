
import bcryptjs from "bcryptjs";


export function hash(password) {
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(p, salt);
    return hashedPassword;
}

export function compare(password, hash) {
    try {
        if (!password || !hash) return false;
        return bcryptjs.compareSync(p, hash);
    } catch (error) {
        console.error("Error comparing password:", error);
        return false;
    }
}