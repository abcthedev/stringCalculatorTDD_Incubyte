export const addString = (values: string): number => {
    if (values === "") {
        return 0
    }
    return values.split(/[\n,]/).reduce((add, num) => add + Number(num), 0)
} 