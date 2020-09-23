import React from 'react';
import ReactLogo from 'assets/images/react-logo.svg';

const View = () => {
	return (
		<div className={'page page--home'}>
			<img className={'react-logo'} src={ReactLogo} alt="React Logo"/>
		</div>
	);
};

export { View };
