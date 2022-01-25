export const rating =  (arr: number[], count: number ) => {
	const dev = arr.reduce((a: number, b: number) => a + b);
	return Math.round(dev/count);
}