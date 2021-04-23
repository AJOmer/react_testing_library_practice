import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../Todo';

afterEach(() => {
    cleanup();
})

test('should render non-completed todo component', () => {
    const todo = { id: 1, title: 'Wash butt', completed: false}
    render(<Todo todo = {todo}/>);
    const todoElement = screen.getByTestId( 'todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Wash butt');
    expect(todoElement).not.toContainHTML('<strike>');
})

test('should render completed todo component', () => {
    const todo = {id: 2, title: 'network linkedin', completed: true };
    render(<Todo todo = {todo}/>);
    const todoElement = screen.getByTestId( 'todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('network linkedin');
    expect(todoElement).toContainHTML('</strike>');
})

test('matches snapshot', () => {
    const todo = {id: 1, title: 'apply for jobs', completed: false};
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
})