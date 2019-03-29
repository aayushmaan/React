import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCoursesSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors }; //in ES5 course: course
}
//for async errors instead of catch error we can create a LOAD_COURSES_FAILURE function here.

export function loadAuthors() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors()
        .then(authors => dispatch(loadCoursesSuccess(authors)))
        .catch(error => {
            throw(error);
        });
    };
}