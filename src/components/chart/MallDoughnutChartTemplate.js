import React from 'react'
import {CChart} from '@coreui/react-chartjs'
import PropTypes, {object} from 'prop-types'

const MallDoughnutChartTemplate = ({title, labels, data}) => {
  const dataSet = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgba(255, 159, 64)'],
        hoverOffset: 4,
      },
    ],
  }

  const options = {
    plugins: {
      responsive: true,
      hoverBorderWidth: 2,
      legend: {
        display: true,
        position: 'right',
        align: 'start',
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
    <CChart type='doughnut' data={dataSet} customTooltips={false} options={options} />
  )
}
export default React.memo(MallDoughnutChartTemplate)
