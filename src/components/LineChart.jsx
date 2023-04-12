import React from 'react';
import 'chart.js/auto';
import {Chart} from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';


const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i = 0; i < coinHistory?.data?.history?.length; i+= 1){
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    };

    let options = {
        scales: {
            x: {
                max: 10000,
                min: 0,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };
  
    return (
    <>
        <Row className='chart-header'>
            <Title level={2} className='chart-title'>
                {coinName} Price Chart
            </Title>

            <Col className='price-container'>
                <Title level={5} className='price-change'>
                    Change: {coinHistory?.data?.change}%
                </Title>
                <Title level={5} className='current-price'>
                    Current {coinName} Price: $ {currentPrice}
                </Title>
            </Col>
        </Row>

        <Chart type='line' data={data} options={options} />
    </>
  )
}

export default LineChart