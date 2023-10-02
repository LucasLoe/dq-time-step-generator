import { useState } from "react";
import TimeStepCalculatorForm from "./components/TimeStepCalculatorForm";
import TimeStepOutputBox from "./components/TimeStepOutputBox";
import Heading from "./components/Heading";
import AlertMaxTimeSteps from "./components/AlertMaxTimeSteps";
import TimeStepVisualizer from "./components/TimeStepVisualizer";

function App() {
	const [timeSteps, setTimeSteps] = useState<number[]>([]);

	return (
		<div className='w-screen min-h-screen bg-slate-800 text-slate-50 pt-4 pb-16 px-4'>
			<div className=' w-full mx-auto flex flex-row flex-wrap justify-center gap-8'>
				<div className='w-full max-w-sm px-4'>
					<Heading label='DQ TIME STEP GENERATOR' />
					<TimeStepCalculatorForm timeSteps={timeSteps} setTimeSteps={setTimeSteps} />
					<AlertMaxTimeSteps timeSteps={timeSteps} />
					<TimeStepOutputBox timeSteps={timeSteps} />
				</div>
				<div className='w-full max-w-sm px-4'>
					<Heading label='VISUALIZE YOUR TIME STEPS' />
					<TimeStepVisualizer timeSteps={timeSteps} />
				</div>
			</div>
		</div>
	);
}

export default App;
