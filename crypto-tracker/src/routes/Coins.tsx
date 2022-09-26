import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { fetchCoins } from '../api';
import { isDarkAtom } from '../atoms';

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinObject {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {

  /* Without React-Query
  const [coins, setCoins] = useState<CoinObject[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const data = await response.json();
      setCoins(data.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  */
  const { isLoading, data } = useQuery<CoinObject[]>('allCoins', fetchCoins);
  const setIsDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleTheme = () => setIsDarkAtom(prev => !prev);

  return <Container>
    <Header>
      <Title>Top 100 Coins</Title>
      <button onClick={toggleTheme}>Mode</button>
    </Header>
    <CoinsList>
      {isLoading ? <Loader>Fetching ...</Loader> :
        data?.slice(0, 100).map(coin =>
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`} state={{ name: coin.name }}>
              <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
              {coin.name} &rarr;
            </Link>
          </Coin>)
      }
    </CoinsList>
  </Container>
}

export default Coins;
