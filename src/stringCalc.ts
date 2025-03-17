export const addString = (values: string): number => {
    if (values === "") {
        return 0
    }
    return values.split(",").reduce((add, num) => add + Number(num), 0)
} 