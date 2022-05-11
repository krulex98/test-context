import * as React from 'react';
import {ButtonsContext, ButtonsContextState, ButtonsContextValue, ColorType} from "./ButtonsContext";

interface ButtonsContextProviderProps {
	children: React.ReactNode;
}

export const ButtonsContextProvider: React.FC<ButtonsContextProviderProps> = (props) => {
	const [state, setState] = React.useState<ButtonsContextState>({
		color: 'red'
	});

	const setButtonColor = (color: ColorType): void => {
		setState({color: color});
	};

	const value: ButtonsContextValue = {
		state: state,
		setButtonColor: setButtonColor
	};

	return <ButtonsContext.Provider value={value}>
		{props.children}
	</ButtonsContext.Provider>;
};