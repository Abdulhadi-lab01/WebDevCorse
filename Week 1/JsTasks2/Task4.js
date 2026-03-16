
export function sortArray(numbers = [], order = "asc") {
    const newArray = [...numbers];

    if (order === "asc") {
        return newArray.sort((a, b) => a - b);
    } else if (order === "desc") {
        return newArray.sort((a, b) => b - a);
    } else {
        return newArray;
    }
}