function isValid(s: string): boolean {
    var stack = new Array();
    if(s.length === 1) return false;
    
    for(var i = 0; i < s.length; i++) {
        if(isOpeningBracket(s[i])) {
            stack.push(s[i]);
        } else {
            if(stack.length < 1) return false;
            
            var response = handleClosingBracket(s[i], stack[stack.length - 1]);
            if(response) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length > 0 ? false : true;
};

function isOpeningBracket(bracket: string) {
    switch(bracket) {
        case'(':
        case'{':
        case'[':
            return true;
        default:
            return false;
    }
}

function handleClosingBracket(bracket: string, top: string) {
    switch(bracket) {
        case ')':
            if(top == '(') return true;
            return false;
        case '}':
            if(top == '{') return true;
            return false;
        case ']':
            if(top == '[') return true;
            return false;
        default:
            return false;
    }
}