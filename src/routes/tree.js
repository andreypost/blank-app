import {
	PageHome,
	Contacts,
} from 'pages';

const routes = {
	'home': {
		path: '/blank-app',
		// path: '/',
		page: PageHome,
		name: 'Home',
		link () {
			return this.path;
		},
		exact: true,
	},
	'contacts': {
		path: '/blank-app/contacts',
		page: Contacts,
		name: 'Contacts',
		link () {
			return this.path;
		},
		exact: true,
	},
};

const __ROOT_ROUTE__ = routes.home.link();

export { routes, __ROOT_ROUTE__ };
