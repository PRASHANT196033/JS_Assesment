function getSubsets(arr, k) {
    let subsets = [];

    function backtrack(start, currentSubset) {
        if (currentSubset.length === k) {
            subsets.push([...currentSubset]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    backtrack(0, []);

    return subsets;
}

let array = [1, 2, 3];
let subsetLength = 2;
let result = getSubsets(array, subsetLength);
console.log(result); 
