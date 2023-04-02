const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
export const getLastMonths = (n = 3) => {
    let months = [];
    for (let i = 0; i < n; i++) {
        let index = new Date(new Date().setMonth(new Date().getMonth() - i)).getMonth();
        months.push(MONTHS[index]);
    }
    months.reverse()
    return months;
}

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export const sum = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i];
    };
    return x;
}
export const HEXtoRGB = (hex, alpha) => {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
        // 6 digits
    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    return "rgba(" + +r + "," + +g + "," + +b + "," + alpha + ")";
}

export const calculatePercents = (drops, total) => {
    const x = Math.floor((drops / total) * 100);
    if (x > 100) return [100, 0]
    return [x, 100 - x]
}