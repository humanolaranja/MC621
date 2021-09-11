const chunk = (arr, chunkSize) => {
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
}

// https://stackoverflow.com/questions/8495687/split-array-into-chunks