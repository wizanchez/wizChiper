/* eslint-disable import/prefer-default-export */

export const wizNumberFormatInt = (num_comments: number) => num_comments.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
export const wizNumberFormatCurrency = (num_comments: number) => '$' + num_comments.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
