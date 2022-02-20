// https://leetcode.com/problems/daily-temperatures/submissions/

function BetterDailyTemperatures(temperatures: number[]): number[] {
    if(temperatures.length === 1) return [0];
    
    //keep a max temp. if value while looping is greater than hottest temp, there is no point checking if there is a warmer temp ahead of it. move forward
    var arr = new Array(temperatures.length).fill(0);
    var max = 0;
    
    for(var i = temperatures.length - 1; i >= 0; i--) {
        if(temperatures[i] >= max) {
            max = temperatures[i];
            continue;
        }
        
        var j = 1;
        while(temperatures[i + j] <= temperatures[i]) {
            j += arr[i+j];            
        }
        arr[i] = j;
    }
    return arr;
};

interface Temperature {
    index: number;
    value: number;
}

function dailyTemperatures(temperatures: number[]): number[] {
    if(temperatures.length === 1) return [0];
    
    var stack: Temperature[] = new Array();
    var answer: number[] = new Array(temperatures.length);
    
    for(var i = 0; i < temperatures.length; i++) {
        if(stack.length < 1) { stack.push({index: i, value: temperatures[i]}); }
        else {
            if(stack[stack.length - 1].value < temperatures[i]) {
                while(stack.length > 0 && stack[stack.length - 1].value < temperatures[i]) {
                    var temperature = stack.pop();
                    answer[temperature.index] = i - temperature.index;
                }
            }
            stack.push({index: i, value: temperatures[i]}); 
        }
    }
    while(stack.length > 0) {
        var temp = stack.pop();
        answer[temp.index] = 0;
    }
    return answer;
};