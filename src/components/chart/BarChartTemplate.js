import React from 'react'
import {CChart} from '@coreui/react-chartjs'
import PropTypes, {object} from 'prop-types'

const BarChartTemplate = ({title, data}) => {
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
        hoverBorderWidth: 4,
        plugins: {
          title: {
            display: true,
            text: title || '',
            font: {
              size: 24,
            },
          },
        },
      }}
    />
  )
}

BarChartTemplate.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(object),
}
export default React.memo(BarChartTemplate)
