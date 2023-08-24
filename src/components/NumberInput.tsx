import { FormEvent } from "react";

type NumberInputProps = {
	id: string;
	value: number;
	onChange: (e: FormEvent<HTMLInputElement>) => void;
};

const NumberInput = (props: NumberInputProps) => {
	return (
		<input
			type='number'
			step='any'
			name={props.id}
			id={props.id}
			className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
			placeholder=''
			required
			value={props.value ?? ""}
			onChange={(e) => props.onChange(e)}
		/>
	);
};

export default NumberInput;
