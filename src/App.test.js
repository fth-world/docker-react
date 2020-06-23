import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

http://dockerreact-env.eba-ig9kcw7n.us-east-2.elasticbeanstalk.com/
    https://s3.console.aws.amazon.com/s3/buckets/elasticbeanstalk-us-east-2-496849308494/?region=us-east-2&tab=overview