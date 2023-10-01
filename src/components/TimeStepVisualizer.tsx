import { useState } from "react";
import Chart from "./Chart";
import RangeInput from "./RangeInput";

type TimeStepVisualizerProps = {
	timeSteps: number[];
};

type InputProps = {
	dres: number;
	t2: number;
	tail: number;
};

const TimeStepVisualizer = (props: TimeStepVisualizerProps) => {
	const { timeSteps } = props;
	const [inputSettings, setInputSettings] = useState<InputProps>({
		dres: 100,
		t2: 10,
		tail: 5,
	});

	const handleFormChange = (e: React.FormEvent<HTMLInputElement>) => {
		const id = e.currentTarget.id.toString();
		const value = e.currentTarget.value ? parseFloat(e.currentTarget.value) : null;
		setInputSettings((prevSettings: InputProps) => ({
			...prevSettings,
			[id]: value,
		}));
	};

	return (
		<div>
			<div className='flex flex-col items-center gap-4 mb-6'>
				<RangeInput
					id='dres'
					label='Dres in Hz'
					value={inputSettings.dres}
					onChange={(e) => handleFormChange(e)}
					min={0.1}
					max={1000}
				/>
				<RangeInput
					id='t2'
					label='T2 in ms'
					value={inputSettings.t2}
					onChange={(e) => handleFormChange(e)}
					min={0.1}
					max={200}
				/>
				<RangeInput
					id='tail'
					label='tail fraction in %'
					value={inputSettings.tail}
					onChange={(e) => handleFormChange(e)}
					min={0}
					max={100}
				/>
			</div>
			{timeSteps.length > 0 ? (
				<div className='w-full h-80 bg-white rounded border-2'>
					<Chart timeSteps={timeSteps} settings={inputSettings} />
				</div>
			) : null}
		</div>
	);
};

export default TimeStepVisualizer;
