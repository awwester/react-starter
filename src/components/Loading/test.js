import React from 'react';
import { shallow } from 'enzyme';
import Loading from 'components/Loading';

it('renders without crashing', () => {
  shallow(<Loading />,);
});
