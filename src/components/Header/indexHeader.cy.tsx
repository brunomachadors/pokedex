import Header from './index';

import { mount } from 'cypress/react18';

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Header />);
  });
});
