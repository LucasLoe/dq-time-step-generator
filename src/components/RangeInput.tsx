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
		<div className='w-full flex flex-col justify-start'>
			<label htmlFor={props.id} className=' text-left mb-2 text-sm font-medium text-slate-100'>
				{props.label}
			</label>
			<div className='w-full flex items-center'>
				<input
					id={props.id}
					type='range'
					min={props.min}
					max={props.max}
					value={props.value}
					className='w-64 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer touch-none'
					onChange={props.onChange}
				/>
				<p className='ml-4 text-slate-100'>{props.value}</p>
			</div>
		</div>
	);
};

export default RangeInput;
