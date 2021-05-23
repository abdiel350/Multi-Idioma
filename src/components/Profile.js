import React from 'react';
import Header from './Header';
import CardIMG from './CardIMG';
import {FormattedMessage} from 'react-intl';

const Profile = () => {
	return (
		<div>
			<Header />

			<div className="main">
				<h1 className="titulo">
					<FormattedMessage
						id="profile.title"
						defaultMessage="Perfil"
					/>
				</h1>

				<CardIMG/>
			</div>
		</div>
	);
}
 
export default Profile;