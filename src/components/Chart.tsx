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

const Chart = (props: ChartProps) => {
	const { settings, timeSteps } = props;

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
					left: 5,
					bottom: 15,
				}}
			>
				<CartesianGrid strokeDasharray='2 2' />
				<YAxis interval={0} type="number"/>
				<Legend />

				<XAxis
					interval={0}
					tickCount={2}
					dataKey='expTdq'
					tickFormatter={(tick) => tick.toFixed(1)}
					label={"DQ evolution time"}
					type="number"
				/>
				<Line
					type='linear'
					dataKey='expIref'
					name='I-ref'
					stroke='#161E49'
					dot={true}
					strokeWidth={2}
				/>
				<Line
					type='natural'
					dataKey='expIdq'
					name='I-DQ'
					stroke='#45B9BC'
					dot={true}
					strokeWidth={2}
				/>
				<Line
					type='natural'
					dataKey='expIndq'
					name='I-nDQ'
					stroke='#F66A49'
					dot={true}
					strokeWidth={2}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
