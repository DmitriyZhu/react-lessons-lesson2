import store from '../store';
import { useCallback,useState } from 'react';
import { exampleAction } from '../store/profile/actions';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';


const Profile = () => {
	const { showName, name } = useSelector(state => state);
	const dispatch = useDispatch();

	const toggleShowName = useCallback(() => {
		dispatch(exampleAction);
	},[dispatch]);

	return (
		<div>
			<h1>Profile</h1>
			<FormGroup>
				<FormControlLabel 
					control={
						<Checkbox onChange={toggleShowName} name={'showName'} checked={showName}  />
					}
					label={'Toggle name'}
				/>
			</FormGroup>
			{showName && <div>Name: {name}<img src='/img/superdog.png' ></img></div>}
			
		</div>
	);
}


export default Profile;