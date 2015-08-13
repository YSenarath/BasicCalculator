/**
 * Created by Yasas on 8/13/2015.
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}

function parse(k) {
    var infix = k.replace(/\s+/g, ''); // remove spaces, so infix[i]!=" "

    var s = new Stack();

    var ops = "-+/*^";
    var precedence = {"^":4, "*":3, "/":3, "+":2, "-":2};
    var associativity = {"^":"Right", "*":"Left", "/":"Left", "+":"Left", "-":"Left"};
    var token;
    var postfix = "";
    var o1, o2;

    for (var i = 0; i < infix.length; i++) {
        token = infix[i];

        if (token > "0" && token < "9") { // if token is operand (here limited to 0 <= x <= 9)
            postfix += token + " ";
        }

        else if (ops.indexOf(token) != -1) { // if token is an operator
            o1 = token;
            o2 = s.peek();
            while (ops.indexOf(o2)!=-1 && (
                (associativity[o1] == "Left" && (precedence[o1] <= precedence[o2]) ) ||
                (associativity[o1] == "Right" && (precedence[o1] < precedence[o2]))
            )){
                postfix += o2 + " "; // add o2 to output queue
                s.pop(); // pop o2 of the stack
                o2 = s.peek(); // next round
            }
            s.push(o1); // push o1 onto the stack
        }
        else if (token == "(") { // if token is left parenthesis
            s.push(token); // then push it onto the stack
        }
        else if (token == ")") { // if token is right parenthesis
            while (s.peek() != "("){ // until token at top is (
                postfix += s.pop() + " ";
            }
            s.pop(); // pop (, but not onto the output queue
        }
    }
    while (s.length()>0){
        postfix += s.pop() + " ";
    }

    return s;
}