import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = null;

export const Contacts = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);