const Heading = (props: { label: string }) => {
	return <h1 className='text-left text-xl tracking-wider mb-4 mt-8 pb-2 pl-2 border-b-2'>{props.label}</h1>;
};

export default Heading
