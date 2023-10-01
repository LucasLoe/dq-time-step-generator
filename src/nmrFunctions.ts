type Settings = {
	dres: number;
	t2: number;
	tail: number;
};
export function tail_fun(t: number, a: number, t2: number) {
	return (a / 100) * Math.exp(-(t / t2));
}

export function al_fun(t: number, rdc: number) {
	return 1 - Math.exp(-Math.pow(2.375 * t * rdc, 1.5)) * Math.cos(3.663 * rdc * t);
}

export function rlx_fun(t: number, t2: number) {
	return Math.exp(-Math.pow(t / t2, 1.8));
}

export function calculateIrefData(t: number, settings: Settings) {
	const data =
		(1 - settings.tail / 100) * rlx_fun(t, settings.t2) +
		tail_fun(t, settings.tail, 4 * settings.t2);
	return parseFloat(data.toFixed(3));
}

export function calculateIdqData(t: number, settings: Settings) {
	const data =
		al_fun(t, settings.dres / 1000) * (1 - settings.tail / 100) * rlx_fun(t, settings.t2);
	return parseFloat(data.toFixed(3));
}

export function calculateIndqData(t: number, settings: Settings) {
	const data = 0.5 * al_fun(t, settings.dres / 1000);
	return parseFloat(data.toFixed(3));
}
