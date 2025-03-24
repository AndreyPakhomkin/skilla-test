export const getRandomCallRate = () => {
    const randomNum = Math.floor(Math.random() * (4));

    switch (randomNum) {
        case 0:
            return 'not_used';
            break;
        case 1:
            return 'bad';
            break;
        case 2:
            return 'ok';
            break;
        case 3:
            return 'perfect';
            break;
    }
    throw new Error("Unexpected value");
}