export const rating =  (arr: number[], count: number ) => {
	const dev = arr.reduce((a: number, b: number) => a + b);
	const result = Math.round(dev/count)
	return result;
}