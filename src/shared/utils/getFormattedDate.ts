export const getFormattedToday = () => {
    const formattedToday = new Date().toISOString().slice(0, 10);[2];
    return formattedToday
}