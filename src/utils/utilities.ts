export const toDisplayValue = (str: string) => str.split('-').map(capitalizeFirstLetter).join(' ');

export const capitalizeFirstLetter = (str: string) => str.substring(0, 1).toUpperCase() + str.substring(1);