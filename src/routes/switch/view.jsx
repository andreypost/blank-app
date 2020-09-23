import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LayoutBase } from 'layouts';
import { routes } from '../tree';

const View = React.memo(() => {
	return (
		<Switch>
			{Object.keys(routes).map((key) => {
				const { page: Page, ...route } = routes[key];

				return (
					<Route
						key={route.path}
						{...route}
						render={(matchProps) => (
							<LayoutBase>
								<Page {...matchProps} />
							</LayoutBase>
						)}
					/>
				)
			})}
		</Switch>
	);
});

export { View };
