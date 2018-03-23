

export const required = value => (value ? undefined : 'Required')
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined