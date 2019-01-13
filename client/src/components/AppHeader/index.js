import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';

import AppHeaderRow from './AppHeader';
import styles from './styles';


export const AppHeader = withStyles(styles)(AppHeaderRow);

const mapStateToProps = (state) => {
    const {authentication} = state;
    return {
        user:  authentication.user
    };
}

export default connect(
    mapStateToProps
)(AppHeader);