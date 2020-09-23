import React from 'react';
import { RoutesSwitch } from 'routes';
import 'antd/dist/antd.css';
import 'assets/styles/index.scss';

const View = React.memo(() => {
	return (
		<RoutesSwitch />
	);
});

export { View };
