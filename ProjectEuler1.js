/*
If we list all the natural numbers below  that are multiples of  or , we get  and . The sum of these multiples is .

Find the sum of all the multiples of  or  below .

Input Format

First line contains  that denotes the number of test cases. This is followed by  lines, each containing an integer, .

Constraints



Output Format

For each test case, print an integer that denotes the sum of all the multiples of  or  below .

Sample Input 0

2
10
100
Sample Output 0

23
2318
Explanation 0

For , if we list all the natural numbers below  that are multiples of  or , we get  and . The sum of these multiples is .

Similarly for , we get .
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

var sumkx = function(n, k) {
        var upperLimit = (n % k === 0) ? n - k : n - (n % k);
        var numOfAdditives = upperLimit / k + 1;
        return upperLimit * numOfAdditives / 2;
    };
    

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(sumkx(n, 3) + sumkx(n, 5) - sumkx(n, 15));
    }

}


