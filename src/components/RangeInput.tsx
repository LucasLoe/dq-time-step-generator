import { FormEvent } from "react";

type RangeInputProps = {
	id: string;
	min: number;
	max: number;
	value: number;
	label: string;
	onChange: (e: FormEvent<HTMLInputElement>) => void;
};

const RangeInput = (props: RangeInputProps) => {
	return (
		<div>
			<label
				htmlFor={props.id}
				className='block mb-2 text-sm font-medium text-slate-100'
			>
				{props.label}
			</label>
			<input
				id={props.id}
				type='range'
				min={props.min}
				max={props.max}
				value={props.value}
				className='h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer'
				onChange={props.onChange}
			/>
		</div>
	);
};

export default RangeInput;
