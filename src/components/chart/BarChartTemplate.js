import React from 'react'
import {CChart} from '@coreui/react-chartjs'
import PropTypes, {object} from 'prop-types'

const BarChartTemplate = ({title, data}) => {
  console.log(data)
  return (
    <CChart
      type='bar'
      customTooltips={false}
      data={{
        labels: [' '],
        datasets: data || [],
      }}
      options={{
        responsive: true,
        hoverBorderWidth: 2,
        plugins: {
          title: {
            display: true,
            text: title || '',
            font: {
              size: 24,
            },
          },
        },
        borderRadius: 10,
        inflateAmount: 1,
      }}
    />
  )
}

BarChartTemplate.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(object),
}
export default React.memo(BarChartTemplate)
