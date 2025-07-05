const bubbleSort = (list) => {
    for(let i = list.length - 1; i >= 1; i--) {
        for(let j = 1; j <= i ; j++) {
            if(list[j] < list[j-1]) {
                const temp = list[j];
                list[j] = list[j - 1]; 
                list[j - 1] = temp;
            }
        }
    }
    return list;
}

console.log(bubbleSort([5,5,3,1,67,8,0,2]))