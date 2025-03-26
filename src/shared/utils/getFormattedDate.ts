export const getFormattedDate = (daysToSubtract = 0): string => {
    const date = new Date();
    date.setDate(date.getDate() - Number(daysToSubtract));
    return date.toISOString().slice(0, 10);
}