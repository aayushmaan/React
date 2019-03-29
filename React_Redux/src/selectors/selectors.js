//using reselect will run this function only if parameters change
//can also be used in reducer
export function authorsFormattedForDropdown(authors) { 
    return authors.map(author => {
        return {
            value:author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}
