const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage

// push -> add in the end of array
strings.push("e"); // 0(1)

// pop -> remove the last item from the array
strings.pop(); // 0(1)

// unshift -> add in the begin of the array
strings.unshift("x"); // 0(n)

// splice -> add item based on the index
strings.splice(2, 0, "alien"); // 0(n)
