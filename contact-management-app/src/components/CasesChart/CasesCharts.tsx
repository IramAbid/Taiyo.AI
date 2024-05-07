import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Chart } from 'react-google-charts';

const fetchCasesData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const Charts = () => {
  const { data, isLoading } = useQuery('casesData', fetchCasesData);
  const [chartData, setChartData] = useState<any[][] | null>(null);

  // Fetch data and format for Google Charts
  useEffect(() => {
    if (data) {
      const { cases, deaths, recovered } = data;
      const chartData = [
        ['Date', 'Cases', 'Deaths', 'Recovered'],
        ...Object.entries(cases).map(([date, value]) => [new Date(date), value, deaths[date] || null, recovered[date] || null]),
      ];
      setChartData(chartData);
    }
  }, [data]);

  // Render chart
  return (
    <div className="w-full sm:w-5/6 mt-8 mb-4 p-4 ml-auto sm:pr-20 sm:pl-20 pb:10 sm:pb-20">
       <h1 className='text-3xl sm:text-4xl font-semibold mb-2 sm:mb-8 text-center text-orange-800'>COVID-19 ACTIVE CASES REPORT</h1>
      <h1 className='text-xl sm:text-3xl font-semibold mb-2 sm:mb-8 text-center'>COVID-19 Cases Fluctuations Over Time</h1>
      {isLoading && <div>Loading...</div>}
     
      {chartData && (
        <Chart className='text-center'
          width={'100%'}
          height={'80vh'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: 'COVID-19 Cases, Deaths, and Recovered Over Time',
            hAxis: {
              title: 'Date',
            },
            vAxis: {
              title: 'Number of Cases',
            },
            series: {
              0: { color: '#FF86F3' }, 
              1: { color: 'red' },  //
              2: { color: 'green' },
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      )}
    </div>
  );
};

export default Charts;
