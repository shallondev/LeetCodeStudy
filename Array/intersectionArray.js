/*
    349. Intersection of Two Arrays

    Problem: Given two integer arrays nums1 and nums2, return an array of their intersection. 
             Each element in the result must be unique and you may return the result in any order.

    Idea: Create sets out of the arrays and perform set intersection.

    Time Complexity: O(max(n,m))
        Why: Converting the set takes O(n) where n is the bigger sized array.
             Performing intersection of the sets will take at worst O(n).
             Converting back to a array will take O(n).

    Space Complexity: O(min(n,m))
        Why: We create a set czxcxzcdsadasdas
                     
*/