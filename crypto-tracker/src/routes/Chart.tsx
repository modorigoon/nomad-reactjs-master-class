import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';

interface Historical {
  time_open: string,
  time_close: string,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number,
  market_cap: number
}

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<Historical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {
    refetchInterval: 10000
  });
  const isDark = useRecoilValue(isDarkAtom);

  return <div>
    {isLoading ? ('Loading charts ...') : (
      <ApexChart
        type="line"
        series={[
          {
            name: 'Price', data: data?.map((price) => price.close) as number[]
          }
        ]}
        options={{
          theme: { mode: isDark ? 'dark' : 'light' },
          chart: { height: 300, width: 500, toolbar: { show: false }, background: 'transparent' },
          grid: { show: false },
          stroke: { curve: 'smooth', width: 4 },
          yaxis: { show: false },
          xaxis: {
            labels: { show: false }, axisTicks: { show: false }, axisBorder: { show: false },
            type: 'datetime',
            categories: data?.map((price) => price.time_close)
          },
          fill: { type: 'gradient', gradient: { gradientToColors: ['#0be881'] } },
          colors: ['#0fbcf9'],
          tooltip: {
            y: {
              formatter: (value) => `$ ${value.toFixed(5)}`
            }
          }
        }} />
    )}
  </div>
}

export default Chart;
