import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import Loader from '../../../../components/Loader';
import { TokenDataType } from '../../../../store/reducers/token';
import './style.css';

interface IProps {
  chartData: TokenDataType;
}

const ApexChart: FC<IProps> = ({ chartData }) => (
  <div id="chart">
    {chartData.length ? (
      <ReactApexChart
        options={{
          chart: {
            type: 'candlestick',
            height:
              window.innerHeight <= 900 ? window.innerHeight * 0.2 : window.innerHeight * 0.6 * 0.3,
            toolbar: {
              show: true,
              offsetX: -(window.innerWidth * 0.2),
              offsetY: 0,
              tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                customIcons: [],
              },
            },
          },
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
        }}
        series={[
          {
            data: chartData,
          },
        ]}
        type="candlestick"
        // @ts-ignore
        height={
          window.innerHeight <= 900 ? window.innerHeight * 0.2 : window.innerHeight * 0.6 * 0.3
        }
      />
    ) : (
      <div style={{ height: 250, display: 'flex', alignItems: 'center' }}>
        <Loader />
      </div>
    )}
  </div>
);

export default ApexChart;
