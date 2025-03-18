export const addString = (values: string): number => {
    if (!values) return 0;

    let delimiterRegex = /[\\n,]/;

    if (values.startsWith("//")) {
        const [delimiterDefinition, numbersString] = values.split("\\n", 2);
        delimiterRegex = new RegExp(`[${delimiterDefinition.slice(2)}\\n,]`);
        console.log("NNE", numbersString, delimiterDefinition)
        values = numbersString;
    }

    const numbers = values.split(delimiterRegex).map((num) => {
        const parsedNum = Number(num);
        if (isNaN(parsedNum)) throw new Error(`Invalid number encountered: ${num}`);
        return parsedNum;
    });

    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);

    return numbers.reduce((sum, num) => sum + num, 0);
};
