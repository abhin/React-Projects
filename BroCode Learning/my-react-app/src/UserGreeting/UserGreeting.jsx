
import styles from './UserGreeting.module.css';
import PropTypes from 'prop-types';

function UserGreeting(props) {
    let message = "Please login to continue";
    let className = styles.loginPrompt;

    if (props.isLoggedIn) {
        message = `Welcome ${props.userName}`;
        className = styles.welcomeMessage;
    }

    return (
        <>
            <h2 className={className}>{message}</h2>
        </>
    );
}

UserGreeting.propTypes = {
    userName: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

UserGreeting.defaultProps = {
    userName: "Guest",
    isLoggedIn: false
}

export default UserGreeting;