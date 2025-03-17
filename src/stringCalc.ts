export const addString = (val: string): number => {
    if (val === "") {
        return 0
    }
    return Number(val)
} 