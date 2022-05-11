import * as React from 'react';
import {useContext} from "react";
import {ButtonsContext, ButtonsContextValue, ColorType} from "../ButtonsContext/ButtonsContext";

const SelectableButtons: React.FC<{}> = () => {
	const {setButtonColor} = useContext<ButtonsContextValue>(ButtonsContext);

	const onClick = (color: ColorType) => {
		setButtonColor(color);
	};

	return <>
		<div className="container">
			<button className="btn btn-red mr10" type="button" onClick={() => onClick('red')}>
				Red
			</button>
			<button className="btn btn-green mr10" type="button" onClick={() => onClick('green')}>
				Green
			</button>
			<button className="btn btn-blue mr10" type="button" onClick={() => onClick('blue')}>
				Blue
			</button>
		</div>
	</>;
};

export default SelectableButtons;