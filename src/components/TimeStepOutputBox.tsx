import {ReactNode } from "react";

type TimeStepOutputBoxProps = {
	timeSteps: number[];
};

const TimeStepOutputBox = (props: TimeStepOutputBoxProps) => {
	const { timeSteps } = props;

	const CopyToClipBoardButton = (props: { action: Function }) => {
		return (
			<button
				className='absolute outline outline-2 outline-slate-700 top-4 right-4 text-white bg-slate-200 shadow-xl  hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded text-sm w-fit px-2 py-2 text-center '
				onClick={() => props.action()}
			>
				{
					<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
						<path d='M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z' />
					</svg>
					/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */
				}
			</button>
		);
	};

	const NumberBox = (props: { children: ReactNode | ReactNode[] }) => {
		return (
			<div className='relative text-slate-800 px-2 py-4 mx-auto mt-8 text-center font-mono max-h-48 overflow-y-scroll whitespace-pre-wrap bg-slate-100 shadow-inner rounded'>
				{props.children}
			</div>
		);
	};

	function copyTimeStepsToClip() {
		navigator.clipboard.writeText([...timeSteps].join("\n"));
	}

	return (
		<div className='relative'>
			{timeSteps.length > 0 ? (
				<>
					<NumberBox>
						{timeSteps.map((num, idx) => {
							return (
								<p className='my-1' key={idx}>
									{num}
								</p>
							);
						})}
					</NumberBox>
					<CopyToClipBoardButton action={copyTimeStepsToClip} />
				</>
			) : null}
		</div>
	);
};

export default TimeStepOutputBox;
