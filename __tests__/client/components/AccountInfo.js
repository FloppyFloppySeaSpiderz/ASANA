import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
// import necessary components here
import AccountInfo from '../../../client/components/AccountInfo';
// import { ExpansionPanelActions } from '@material-ui/core';
configure({ adapter: new Adapter() });
describe('AccountInfo React unit tests', () => {
  describe('AccountInfo', () => {
    let wrapper;
    const props = {
      accounts: [
        {
          account_id: 'yBDqZZbGZ5HX7GBrw654cpDGKWlP4ztyw43j8',
          account_subtype: 'checking',
          account_name: 'Plaid Gold Standard 0% Interest Checking',
          acount_balance: 100,
        },
        {
          account_id: '9B5rggwqgKHnekAZP8D4fPExkdlAryuRg4GAo',
          account_subtype: 'savings',
          account_name: 'Plaid Silver Standard 0.1% Interest Saving',
          acount_balance: 200,
        },
      ],
    };

    beforeAll(() => {
      wrapper = shallow(<AccountInfo {...props} />);
    });
    it('Should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('Should render a div with class of accInfo', () => {
      // expect(wrapper.find('div')).toBe(true);
      expect(wrapper.find('div').hasClass('accInfo')).toEqual(true);
    });
  });
});
  