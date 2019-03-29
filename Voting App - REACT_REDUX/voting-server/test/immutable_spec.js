/* eslint es6:true */
import {expect} from 'chai';
import {List,Map} from 'chai-immutable';

describe('immutability', () => {
    
    describe('A list', () => {
        
        function addMovie(currentStatew, movie) {
            return currentState.push(movie);
        }
        
        it('is immutable', () => {
            let state = List.of('Trainspotting','28 Days Later');
            let nextState = addMovie(state,'Sunshine');
            
            expect(nextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));
        });
    });
    
    describe('a tree', () => {
        
        function addMovie(currentState,movie) {
            //less concise way
            /*return currentState.set(
            'movies',
            currentState.get('movies').push(movie)
            );*/
            return currentState.update('movies', movies => movies.push(movie));
        }
        
        it('is immutable', () => {
            let state = Map({
                movies: List.of('Trainspotting', '28 Days Later')
            });
            let nextState = addMovie(state,'Sunshine');
            
            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            }));
        });
    });
});