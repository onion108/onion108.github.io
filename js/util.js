export function randomInt(l, r) {
    return Math.round(Math.random() * 114514) % (r-l) + l
}

export function randomString(length, pool) {
    let POOL ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={}[]\\|;:\"',.<>/?"
    if (pool !== undefined && typeof(pool) === "string") {
        POOL = pool;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
        result += POOL[randomInt(0, POOL.length)];
    }
    return result;
}


