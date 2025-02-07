// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

export function race(
	v1: number,
	v2: number,
	g: number
): [number, number, number] | null {
	if (v1 >= v2) return null;

	const speedDiffPerHr = v2 - v1; //130
	const speedDiffPerctentage = speedDiffPerHr / v2;
}
