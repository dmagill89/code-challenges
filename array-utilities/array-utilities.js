
function map(array, mapper) {

    const length = array.length;
    const mapped = [];

    for (let i = 0; i < length; i++) {
        mapped.push(mapper(array[i]));
    }

    return mapped;
}

function filter(array, filter) {
    
    const length = array.length;
    const filtered = [];

    for (let i = 0; i < length; i++) {
        if (filter(array[i])) {
            filtered.push(array[i]);
        }
    }

    return filtered;
}