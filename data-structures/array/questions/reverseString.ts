function reverse(str: string) {
    //check input
    if(str.length < 2) return str;

    var len = str.length;
    var reverse = new Array();
    for(let i = len - 1; i >= 0; i--) {
        reverse.push(str[i]);
    }
    return reverse.toString();
}

function rev(str: string) {
    return str.split('').reverse().join('');
}

const reverseES6 = (str: string) => [...str].reverse().join('');