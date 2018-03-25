

export const required = value => (value ? undefined : 'This field is required')
export const number = value => value && isNaN(Number(value)) ? 'ID must be a number' : undefined