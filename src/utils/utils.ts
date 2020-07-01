export function groupBy(objectArray: any[], property: string | number) {
    return objectArray.reduce((acc: { [x: string]: any[]; }, obj: { [x: string]: any; }) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
