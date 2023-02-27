import {useSearchParams} from 'react-router-dom';
import {
  Header,
  Link,
  LogoutBtn,
  LogoutBtnText,
  UserIcon,
  UserInfo,
  UserText,
  UserTextWrap,
} from './HeaderComp.styled';
import logoutSvg from '../../Img/Logo.svg';



export const HeaderComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  //   const [films, setFilms] = useState([]);
  // const location = useLocation();

  const onFormSubmit = event => {
    event.preventDefault();
    if (event.target.elements.query.value === '') {
      return;
    }
    setSearchParams({ query: event.target.elements.query.value });
  };

  const handleModalOpen = () => {
    console.log(query);
  };

  return (
    <Header>
      <Link to="/" end>
        <img src={logoutSvg} alt="Logo" width={30} />
      </Link>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search resipes"
          name="query"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      <UserInfo>
        <UserIcon>U</UserIcon>
        <UserTextWrap>
          <UserText>user@mail.com</UserText>
        </UserTextWrap>
        <LogoutBtn type="button" onClick={handleModalOpen}>
          <LogoutBtnText>Exit</LogoutBtnText>
        </LogoutBtn>
      </UserInfo>
    </Header>
  );
};
