export const secondsToTime = (secs: number) => {
    const minutes = Math.floor((secs % 3600) / 60);
    const remainingSeconds = secs % 60;

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}