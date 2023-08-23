import { InputProps } from "./types";

function generate_time_steps(props: InputProps): number[] {
	console.log("executed");
	let { l1, l3, l11, d4, p1 } = props;
	const timeSteps: number[] = [];
	let d5: number = d4;

	for (let step = 0; step < l11; step++) {
		timeSteps.push(Math.round(d5 * l1 * (1 - (12 * p1) / d5) * 10000) / 10000);
		if (step > 0) {
			d5 = d4 * (1 + (step % l3) / (l3 + 2));

			if (step % l3 === 0) {
				if (step > 0) {
					l1 *= 2;
				}
			}
		} else {
			l1 = 1;
		}
	}
	return timeSteps;
}

export default generate_time_steps;
