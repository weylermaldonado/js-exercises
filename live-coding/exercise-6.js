/**
 *  Given a multidimensional array with depth of n, flatten it.
 *  Once flattened make it available as a method on array instance
 *
 * Example:
 * [1,2,[3,4]] -> [1,2,3,4]
 */

let arr = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]]


console.log(arr.flatten());