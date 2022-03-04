import { useContext } from 'react';
import { MyThemeContext } from '../App';

const Home = () => {
	const contextValue = useContext(MyThemeContext);

	return (
		<div>
			<h1>
				Home
			</h1>
			<b>{contextValue.theme}</b>
		</div>
	);
}

export default Home;