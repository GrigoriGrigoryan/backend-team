export const rating =  (arr: number[]) => {
	const dev = arr.reduce((a: number, b: number) => a + b);
	const count = arr.length;
	const result = Math.round(dev/count)
	return result;
}