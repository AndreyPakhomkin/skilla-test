export const getFormattedToday = () => {
    const formattedToday = new Date().toISOString().slice(0, 10);
    return formattedToday
}