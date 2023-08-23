import { PropsWithChildren } from "react";

const Grouped = ({ children }: PropsWithChildren<{}>) => {
	return <div className='relative z-0 w-full mb-6 group'>{children}</div>;
};

export default Grouped;
