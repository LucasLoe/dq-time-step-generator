const AlertMaxTimeSteps = (props: { timeSteps: number[] }) => {
	const timeSteps = props.timeSteps;
	return (
		<>
			{timeSteps && Math.max(...timeSteps) > 1000 && (
				<div className='w-full my-8 mx-auto outline outline-4 outline-red-800 bg-red-300 p-4 rounded shadow-xl'>
					<p className='font-bold text-red-800 w-full text-center'>Attention!</p>
					<br />
					<p className='text-red-800 text-justify'>{`Your current settings result in a DQ evolution time that exceeds reasonable values. You should adjust your parameters such that the maximum does not exceed roughly 800ms to avoid burning the probe head and your sample.`}</p>
				</div>
			)}
		</>
	);
};

export default AlertMaxTimeSteps;
