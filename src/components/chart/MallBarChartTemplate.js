import React from 'react'
import {CChart} from '@coreui/react-chartjs'
import PropTypes, {object} from 'prop-types'

const MallBarChartTemplate = ({title, labels, data}) => {
  const dataSet = {
    labels: [' '],
    datasets: [
      {
        label: '서비스 이용 불편',
        data: [data[0]],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '가격 불만족',
        data: [data[1]],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '제품 기능 불만족',
        data: [data[2]],
        backgroundColor: 'rgb(255, 205, 86)',
      },
      {
        label: '기타(직접 입력)',
        backgroundColor: 'rgba(255, 159, 64)',
        data: [data[3]],
      },
    ],
  }

  const options = {
    plugins: {
      //responsive: true,
      hoverBorderWidth: 2,
      legend: {
        display: true,
        position: 'right',
        align: 'start',
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  }
  return (
    // <CChart
    //   type='doughnut'
    //   customTooltips={false}
    //   labels={labels}
    //   data={data}
    //   options={{
    //     responsive: true,
    //     hoverBorderWidth: 2,
    //     plugins: {
    //       title: {
    //         display: true,
    //         text: title || '',
    //         font: {
    //           size: 24,
    //         },
    //       },
    //     },
    //     borderRadius: 10,
    //     inflateAmount: 1,
    //   }}
    // />
    <CChart type='bar' data={dataSet} customTooltips={false} options={options} />
  )
}

export default React.memo(MallBarChartTemplate)
