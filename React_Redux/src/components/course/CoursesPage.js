import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
    constructor(props,context) {
        super(props,context);

    this.redirecttoAddCoursePage = this.redirecttoAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return (<div key={index}>{course.title}</div>);
    }

    redirecttoAddCoursePage() {
        browserHistory.push('/course');
    }

    render () {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirecttoAddCoursePage}/>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses //state.courses corresponds to the courses we defined in the rootreducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
}

//mapDispatchToProps is an optional parameter.
//if not used, connect adds a dispatch function to props.
//export default connect(mapStateToProps)(CoursesPage); 
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); 