import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import WezomLogo from 'assets/images/wezom-logo.svg';

const View = React.memo(() => {
	return (
		<NavLink to={routes['home'].link()} className={'logo'} activeClassName={'is-active'} exact={true}>
			<img className={'logo__img'} src={WezomLogo} alt={'Wezom'} />
		</NavLink>
	);
});

export { View };
