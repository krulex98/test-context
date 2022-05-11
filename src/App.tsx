import React from 'react';
import './App.css';
import {ButtonsContextProvider} from "./ButtonsContext/ButtonsContextProvider";
import SelectableButtons from "./SelectableButtons/SelectableButtons";
import MainButton from "./MainButton/MainButton";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ButtonsContextProvider>
					<SelectableButtons/>
					<MainButton/>
				</ButtonsContextProvider>
			</header>
		</div>
	);
}

export default App;
