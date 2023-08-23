import { useState } from "react";
import { InputProps } from "./types";
import LabelText from "./components/LabelText";
import NumberInput from "./components/NumberInput";
import Grouped from "./components/Grouped";
import generate_time_steps from "./dq_time_step_generator";

function App() {
	const [inputSettings, setInputSettings] = useState<InputProps>({
		l1: 0.0,
		l3: 2,
		l11: 40,
		d4: 0.1,
		p1: 0.002,
	});

	const [timeSteps, setTimeSteps] = useState<number[]>([]);

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
		<>
			<div className='min-w-screen min-h-screen bg-slate-800 text-slate-50 py-8 px-4'>
				<h1 className='text-center text-2xl tracking-wider'>DQ TIME STEP GENERATOR</h1>
				<div className='max-w-md mx-auto mt-8'>
					<Grouped>
						<NumberInput id='l1' value={inputSettings.l1} onChange={(e) => handleFormChange(e)} />
						<LabelText htmlForText='l1' labelText='l1 (default: 0)' />
					</Grouped>
					<Grouped>
						<NumberInput id='l3' value={inputSettings.l3} onChange={(e) => handleFormChange(e)} />
						<LabelText htmlForText='l3' labelText='l3 (cycle number)' />
					</Grouped>
					<Grouped>
						<NumberInput id='l11' value={inputSettings.l11} onChange={(e) => handleFormChange(e)} />
						<LabelText
							htmlForText='l11'
							labelText='l11 (num of points in 2nd dimension; l11 = td2/2)'
						/>
					</Grouped>
					<Grouped>
						<NumberInput id='d4' value={inputSettings.d4} onChange={(e) => handleFormChange(e)} />
						<LabelText htmlForText='d4' labelText='d4 (initial cycle increment in ms)' />
					</Grouped>
					<Grouped>
						<NumberInput id='p1' value={inputSettings.p1} onChange={(e) => handleFormChange(e)} />
						<LabelText htmlForText='p1' labelText='p1 (pulse length in ms)' />
					</Grouped>
					<div className='flex flex-row justify-evenly items-center'>
						<button
							className='text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							onClick={(e) => handleSubmit(e)}
						>
							Submit
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
				<div className='max-w-md mx-auto'>
					{timeSteps && Math.max(...timeSteps) > 1000 && (
						<div className='w-full my-8 mx-auto outline outline-4 outline-red-800 bg-red-300 p-4 rounded shadow-xl'>
							<p className='font-bold text-red-800 w-full text-center'>Attention!</p>
							<br />
							<p className='text-red-800 text-justify'>{`Your current settings result in a DQ evolution time that exceeds reasonable values. You should adjust your parameters such that the maximum does not exceed roughly 800ms to avoid burning the probe head and your sample.`}</p>
						</div>
					)}
					<div className='relative'>
						<div className='relative text-slate-800 px-2 py-4 mx-auto mt-8 text-center font-mono max-h-64 overflow-auto whitespace-pre-wrap bg-slate-100 shadow-inner rounded'>
							{timeSteps.length > 0 &&
								timeSteps.map((num, idx) => {
									return (
										<p className='my-1' key={idx}>
											{num}
										</p>
									);
								})}
						</div>

						{timeSteps && timeSteps.length > 0 && (
							<button
								className='absolute outline outline-2 outline-slate-700 top-4 right-4 text-white bg-slate-200 shadow-xl  hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded text-sm w-fit px-2 py-2 text-center '
								onClick={() => navigator.clipboard.writeText([...timeSteps].join("\n"))}
							>
								{
									<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
										<path d='M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z' />
									</svg>
									/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */
								}
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
