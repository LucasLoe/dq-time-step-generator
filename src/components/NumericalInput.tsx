import { FormEvent } from "react";

type NumericalInputProps = {
	labelText: string;
	id: string;
	value: number;
	onChange: (e: FormEvent<HTMLInputElement>) => void;
};

const NumericalInput = (props: NumericalInputProps) => {
	return (
		<div className='relative z-0 w-full mb-6 group text-slate-50'>
			<input
				type='number'
				step='any'
				name={props.id}
				id={props.id}
				className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				placeholder=''
				required
				value={props.value ?? ""}
				onChange={(e) => props.onChange(e)}
			/>
			<label
				htmlFor={props.id}
				className='peer-focus:font-medium absolute text-md text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
			>
				{props.labelText}
			</label>
		</div>
	);
};

export default NumericalInput;
