import generate_time_steps from "../dq_time_step_generator";
import { Dispatch, SetStateAction, useState } from "react";
import { InputProps } from "../types";
import NumericalInput from "./NumericalInput";

type TimeStepCalculatorFormProps = {
	timeSteps: number[];
	setTimeSteps: Dispatch<SetStateAction<number[]>>;
};

const TimeStepCalculatorForm = (props: TimeStepCalculatorFormProps) => {
	const { timeSteps, setTimeSteps } = props;
	const [inputSettings, setInputSettings] = useState<InputProps>({
		l1: 0.0,
		l3: 2,
		l11: 20,
		d4: 0.1,
		p1: 0.002,
	});

	const handleFormChange = (e: React.FormEvent<HTMLInputElement>) => {
		const id = e.currentTarget.id.toString();
		const value = e.currentTarget.value ? parseFloat(e.currentTarget.value) : null;
		setInputSettings((prevSettings: InputProps) => ({
			...prevSettings,
			[id]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setTimeSteps(generate_time_steps(inputSettings));
	};

	return (
		<div className='max-w-md mx-auto mt-8'>
			<NumericalInput
				id='l1'
				value={inputSettings.l1}
				onChange={(e) => handleFormChange(e)}
				labelText='l1 (default: 0)'
			/>
			<NumericalInput
				id='l3'
				value={inputSettings.l3}
				onChange={(e) => handleFormChange(e)}
				labelText='l3 (cycle number)'
			/>

			<NumericalInput
				id='l11'
				value={inputSettings.l11}
				onChange={(e) => handleFormChange(e)}
				labelText='l11 (num of points in 2nd dim.; l11 = td2/2)'
			/>
			<NumericalInput
				id='d4'
				value={inputSettings.d4}
				onChange={(e) => handleFormChange(e)}
				labelText='d4 (initial cycle increment in ms)'
			/>
			<NumericalInput
				id='p1'
				value={inputSettings.p1}
				onChange={(e) => handleFormChange(e)}
				labelText='p1 (pulse length in ms)'
			/>
			<div className='flex flex-row justify-evenly items-center'>
				<button
					className='shadow-inner bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-600 font-medium rounded-lg text-slate-800 text-md w-sm px-5 py-2.5 text-center'
					onClick={(e) => handleSubmit(e)}
				>
					Generate!
				</button>
				<p>
					Max. time is:{" "}
					<span className='px-2 font-mono '>
						{timeSteps && timeSteps.length > 0 ? Math.round(Math.max(...timeSteps)) : 0}
					</span>
					<span> ms</span>
				</p>
			</div>
		</div>
	);
};

export default TimeStepCalculatorForm;
