const binarySearch = (list, item) => {
    const search = (start, end) => {
        if(start > end) return -1;

        const mid = Math.floor((start + end) / 2);

        if(list[mid] === item) return mid;

        if(item > list[mid])
            return search(mid + 1, end);
        else 
            return search(start, end - 1);
    }

    return search(0, list.length - 1);

}

console.log(binarySearch([0,1,2,3,4,5,10,70], 70));