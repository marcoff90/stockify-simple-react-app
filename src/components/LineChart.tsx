import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";
import {IStockData} from "../interfaces/stock-data";

type Props = {
  chartData: IStockData[];
}

const LineChartWrapper: React.FC<Props> = ({chartData}) => {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={500}
            height={300}
            data={chartData}
        >
          <Line type="monotone" dataKey="price" stroke="#00adb5" strokeWidth={3} activeDot={{r: 8}}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"
                 style={{
                   fontSize: '1rem',
                   fontFamily: 'Roboto',
                 }}/>
          <YAxis padding={{bottom: 20, top: 20}}
                 type={'number'}
                 domain={[1,10]}
                 style={{
                   fontSize: '1rem',
                   fontFamily: 'Roboto',
                 }}/>
          <Tooltip/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
  );
};

export default LineChartWrapper;
