import styles from "./student.module.css";
import propTypes from 'prop-types';

function Student(props) {
    return (
        <>
            <div className={styles.student}>
                <p className={styles.name}>
                    Name: {props.name}
                </p>
                <p>
                    Age: {props.age}
                </p>
                <p>
                    Is Student: {props.isStudent ? "Yes" : "No"}
                </p>
            </div>
        </>
    );
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student;