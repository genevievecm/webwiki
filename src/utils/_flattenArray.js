// flatten array with recursion
export const flatten = (array) => 
	array.reduce( (a,b) => a.concat(Array.isArray(b) ? flatten(b) : b), [] );