const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
export const getLastMonths = (n = 3) => {
    let months = [];
    for (let i = 0; i < n; i++) {
        let index = new Date(new Date().setMonth(new Date().getMonth() - i)).getMonth();
        months.push(MONTHS[index].substring(0, 3));
    }
    months.reverse()
    return months;
}

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}