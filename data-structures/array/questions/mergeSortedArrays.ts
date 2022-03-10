function merge(arr1: number[], arr2: number[]) {
    if(arr1.length < 1) return arr2;
    if(arr2.length < 1) return arr1;

    var i = 0;
    var j = 0;
    const answer:number[] = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            answer.push(arr1[i]);
            i++;
        } else {
            answer.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        answer.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        answer.push(arr2[j]);
        j++;
    }

    return answer;
}