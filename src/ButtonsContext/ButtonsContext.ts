import * as React from 'react';

export type ColorType = 'red' | 'green' | 'blue';

export interface ButtonsContextState {
	color: ColorType;
}

export interface ButtonsContextValue {
	state: ButtonsContextState;
	setButtonColor: (color: ColorType) => void;
}

export const ButtonsContext: React.Context<ButtonsContextValue> = React.createContext<ButtonsContextValue>({
	state: {
		color: 'red'
	},
	setButtonColor: (color: string) => {}
});

