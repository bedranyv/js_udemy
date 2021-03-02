/* Regex Password Validation
In testing, a spy function is one that keeps track of various metadata regarding its invocations. 
Some examples of properties that a spy might track include:

Whether it was invoked
How many times it was invoked
What arguments it was called with
What contexts it was called in
What values it returned
Whether it threw an error
For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. 
The returned spy must be callable in the same manner as the original func, and include the following additional 
properties/methods:

.callCount() — returns the number of times spy has been called
.wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
.returned(val) — returns true if spy ever returned val, else returns false
Below is a specific example of how spyOn might work in the wild.

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2
adderSpy.wasCalledWith(4); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true
adderSpy.returned(0); // false

Sample Tests:
function returns1 () { return 1; }

var spy = spyOn(returns1);

Test.assertEquals(spy.callCount(), 0);
Test.assertEquals(spy.returned(1), false);
Test.assertEquals(spy.wasCalledWith('hello'), false);

spy('hello', 'hi', 'howdy');
spy('goodbye', 'bye', 'see ya');

Test.assertEquals(spy.callCount(), 2);
Test.assertEquals(spy.returned(1), true);
Test.assertEquals(spy.wasCalledWith('hi'), true);
Test.assertEquals(spy.wasCalledWith('bye'), true);
*/


function spyOn (func) {
    this.name = func;
    this.callcount = 0;
    this.callArr = [];
    this.returnArr = [];

    this.func = function(n1,n2) {
        this.callcount++;
        this.callArr.push(n1);
        this.callArr.push(n2);
        this.returnArr.push(n1 + n2);
        return n1 + n2;
    };
}

new spyOn('adder');
adder(2,4);



