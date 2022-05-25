import { Link } from 'react-router-dom';

import { ItemWrapper, Text, Wrapper } from './style';

import AccountBottom from '../icons/AccountBottom';
import ListBottom from '../icons/ListBottom';

const Header = () => (
  <Wrapper>
    <Link to="/list">
      <ItemWrapper>
        <ListBottom />
        <Text>List</Text>
      </ItemWrapper>
    </Link>
    <Link to="/account">
      <ItemWrapper>
        <AccountBottom />
        <Text>Account</Text>
      </ItemWrapper>
    </Link>
  </Wrapper>
);

export default Header;
