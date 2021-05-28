function multiplyByAdd(a, b) {
    let product = 0;
    while (b>0) {
        product += a;  // Keep a running sum
        b--;   // Count down using b
    }
    return product;
}

function multiplyByShift(a, b) {
    let product = 0;
    while (b>0) {
        if (b & 0b000001) {
            product += a;
        }
        b >>= 1;   // Consider the next bit of b
        a <<= 1;   // Double a to match place 
    }
    return product;
}

