/*
Description:  Given two strings s and t, return true if s is a subt of t, or false otherwise.
*/

// O(n) time  
// O(1) space 

var isSubsequence = function(s, t) {
    let sPointer =  0;
    let tPointer = 0;

    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            // If the current elements match, move both pointers
            sPointer++;
            tPointer++;
        } else {
            // If the elements don't match, move only the sPointer
            sPointer++;
        }
    }

    // After the loop, check if all elements in the t were found
    return tPointer === t.length;
}