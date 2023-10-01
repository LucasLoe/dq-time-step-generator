import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
} from "recharts";

import { calculateIdqData, calculateIndqData, calculateIrefData } from "../nmrFunctions";

type Settings = {
	dres: number;
	t2: number;
	tail: number;
};

type ChartProps = {
	timeSteps: number[];
	settings: Settings;
};

/**
function createInterpolatedX(limit: number, spacing: number) {
	const result = [];
	let i = 0;

	if (limit > 0) {
		while (i <= limit) {
			result.push(i);
			i += spacing;
		}
	} else {
		return [0];
	}
	return result;
}
 */

const Chart = (props: ChartProps) => {
	const { settings, timeSteps } = props;
	/**
     const timeStepLimit = Math.max(...timeSteps);
     const interpolatedSpacing = parseFloat((timeStepLimit / 100).toFixed(2));
     const interpolX = createInterpolatedX(timeStepLimit, interpolatedSpacing);
	const interpolatedData = interpolX.map((t) => ({
		tdq: t,
		Iref: calculateIrefData(t, settings),
		Idq: calculateIdqData(t, settings),
		Indq: calculateIndqData(t, settings),
	}));
 */
	const experimentalData = timeSteps.map((t) => ({
		expTdq: t,
		expIref: calculateIrefData(t, settings),
		expIdq: calculateIdqData(t, settings),
		expIndq: calculateIndqData(t, settings),
	}));

	return (
		<ResponsiveContainer>
			<LineChart
				data={experimentalData}
				width={500}
				height={300}
				margin={{
					top: 10,
					right: 20,
					left: 10,
					bottom: 10,
				}}
			>
				<CartesianGrid strokeDasharray='2 2' />
				<YAxis />
				<Legend />

				<XAxis dataKey='expTdq' tickFormatter={(tick) => tick.toFixed(1)} />
				<Line
					type='monotone'
					dataKey='expIref'
					name='I-ref'
					stroke='#161E49'
					dot={true}
					strokeWidth={3}
				/>
				<Line
					type='monotone'
					dataKey='expIdq'
					name='I-DQ'
					stroke='#45B9BC'
					dot={true}
					strokeWidth={3}
				/>
				<Line
					type='monotone'
					dataKey='expIndq'
					name='I-nDQ'
					stroke='#F66A49'
					dot={true}
					strokeWidth={3}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
