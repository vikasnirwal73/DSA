const partition = (list: number[], low: number, high: number): number => {
    const pivot = list[high];

    let i = low - 1;

    for(let j = low; j < high; j++) {
        if(list[j] < pivot) {
            i++;
            const temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }
    }

    i++;
    const temp = list[high];
    list[high] = list[i];
    list[i] = temp;


    return i;

}
const qs = (list: number[], low: number, high: number): void => {
    if(low >= high) return;

    const p = partition(list, low, high);
    qs(list, low, p - 1);
    qs(list, p + 1, high);

}
const quickSort = (list: number[]): number[] => {
    if(list.length < 1) return list;

    qs(list, 0, list.length - 1);

    return list;
}

export default quickSort;