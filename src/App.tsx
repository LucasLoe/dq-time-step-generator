import { useState } from "react";
import TimeStepCalculatorForm from "./components/TimeStepCalculatorForm";
import TimeStepOutputBox from "./components/TimeStepOutputBox";
import Heading from "./components/Heading";
import AlertMaxTimeSteps from "./components/AlertMaxTimeSteps";
import TimeStepVisualizer from "./components/TimeStepVisualizer";

function App() {
	const [timeSteps, setTimeSteps] = useState<number[]>([]);

	return (
		<div className='min-w-screen min-h-screen bg-slate-800 text-slate-50 pt-4 pb-16 px-4'>
			<div className='max-w-md mx-auto'>
				<Heading label='DQ TIME STEP GENERATOR' />
				<TimeStepCalculatorForm timeSteps={timeSteps} setTimeSteps={setTimeSteps} />
				<AlertMaxTimeSteps timeSteps={timeSteps} />
				<TimeStepOutputBox timeSteps={timeSteps} />
				<Heading label='VISUALIZE YOUR TIME STEPS' />
				<TimeStepVisualizer timeSteps={timeSteps} />
			</div>
		</div>
	);
}

export default App;
