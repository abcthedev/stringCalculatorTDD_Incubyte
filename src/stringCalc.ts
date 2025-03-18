export const addString = (values: string): number => {
    if (values === "") {
        return 0
    }

    let delimiter = /[\n,]/;

    if (values.startsWith("//")) {
        const parts = values.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        values = parts[1];
    }
    
    const negatives = values.split(delimiter).filter((num) => Number(num) < 0);
    if (negatives.length > 0) throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);

    return values.split(delimiter).reduce((add, num) => add + Number(num), 0)
} 