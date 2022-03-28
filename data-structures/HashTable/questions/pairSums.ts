function numberOfPairs(arr, k) {
    if(arr.length < 2) return 0;
   
    var map = new Map();
    
    // count the frequency of each number in arr
    for (var i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    
    /* 
       Iterate through each element and increment the
       count. Divide that count by two because every pair is counted twice
    */
    let pairs = 0;
    for (i = 0; i < arr.length; i++) {
        let diff = k - arr[i];
        if (map.has(diff))
            pairs += map.get(diff);
  
        /* 
            if k - arr[i] === arr[i], then we need to subtract one 
            so that the (arr[i], arr[i]) pair is not considered. For example,
            if we have k = 6 and arr [3]. Since the map does return true 
            for 3 existing in the map, the pairs count will go up by one. This is
            not a true case, and therefore we should subtract one.
        */
        if (diff === arr[i])
            pairs--;
    }
  
    return pairs / 2;
  }