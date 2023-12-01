import Header from './index';

import { mount } from 'cypress/react18';

describe('<Header />', () => {
  it('renders', () => {
    mount(<Header />);
  });
});
