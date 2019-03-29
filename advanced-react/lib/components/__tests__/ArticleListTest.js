import React from 'react';
import ArticleList from '../ArticleList';
//import Article from '../Article';
//import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    // store: {
    //   lookupAuthor: jest.fn(() => ({})),
    // },
  };

  //Article.propTypes = {};

  it('renders correctly', () => {
    // const tree = renderer.create(
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    ); //.toJSON();
    
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    // console.log(tree);
    //expect(tree).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();

  });
});