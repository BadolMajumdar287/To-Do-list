

export function response(res, code, message) {
    return res.status(code).json(message);
}