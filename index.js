function KillerTen() {
    var current = [];
    var stack = [];
    for(var k = 0; k < 9999999*99999999999999; k++) {
        for(var j = 0; j < 10; j++) {
            for(var i = 0; i < 9999; i++) {
                current.push(999999*999999999999999999999999999999999999999999999999999999999999*i);
            }
            stack.push(current);
            current = []
        }
        stack = [stack]
    }
}