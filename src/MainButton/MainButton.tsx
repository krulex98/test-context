import * as React from 'react';
import {ButtonsContext} from '../ButtonsContext/ButtonsContext';

const MainButton: React.FC<{}> = () => {
	const {state} = React.useContext(ButtonsContext);

	return <>
		<h1>Selected: {state.color}</h1>
	</>;
};

export default MainButton;