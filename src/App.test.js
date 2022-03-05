import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container= null;
})

it('you can search by typing in search box', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const searchInput = container.querySelector('#search_input');
  const searchButton = container.querySelector('#search');
  const searchInfo = container.querySelector('.main_info#search')
  act(() =>{
    fireEvent.change(searchInput,{target:{value: 'saturday'}})
    fireEvent.click(searchButton);
  })
  expect(searchInfo).toHaveTextContent('Key: saturday');
});
