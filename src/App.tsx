import { useState } from "react";
import { InputProps } from "./types";
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
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='number'
							step='any'
							name='l1'
							id='l1'
							className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=''
							required
							value={inputSettings.l1 ?? ""}
							onChange={(e) => handleFormChange(e)}
						/>
						<label
							htmlFor='l1'
							className='peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							l1 (default:0)
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='number'
							step='any'
							name='l3'
							id='l3'
							className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=''
							required
							value={inputSettings.l3 ?? ""}
							onChange={(e) => handleFormChange(e)}
						/>
						<label
							htmlFor='l3'
							className='peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							l3 (cycle number)
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='number'
							step='any'
							name='l11'
							id='l11'
							className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=''
							required
							value={inputSettings.l11 ?? ""}
							onChange={(e) => handleFormChange(e)}
						/>
						<label
							htmlFor='l11'
							className='peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							l11 (number of points in second dimension ; l11 = td2 / 2)
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='number'
							step='any'
							name='d4'
							id='d4'
							className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=''
							required
							value={inputSettings.d4 ?? ""}
							onChange={(e) => handleFormChange(e)}
						/>
						<label
							htmlFor='d4'
							className='peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							d4 (initial cycle increment in ms)
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='number'
							step='any'
							name='p1'
							id='p1'
							className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=''
							required
							value={inputSettings.p1 ?? ""}
							onChange={(e) => handleFormChange(e)}
						/>
						<label
							htmlFor='p1'
							className='peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							p1 (pulse length in ms)
						</label>
					</div>
					<div className='flex flex-row justify-evenly items-center'>
						<button
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							onClick={(e) => handleSubmit(e)}
						>
							Submit
						</button>
						<p>
							Max. time is:{" "}
							<span className='px-2 font-mono '>
								{timeSteps && timeSteps.length > 0 ? Math.max(...timeSteps) : 0}
							</span>
							<span> ms</span>
						</p>
					</div>
				</div>
				<div className='text-slate-800 px-2 py-4 mx-auto mt-8 text-center font-mono max-h-64 max-w-md overflow-auto whitespace-pre-wrap bg-slate-100 shadow-inner rounded'>
					{timeSteps.length > 0 &&
						timeSteps.map((num, idx) => {
							return (
								<p className='my-1' key={idx}>
									{num}
								</p>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default App;
