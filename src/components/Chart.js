import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const dataValues = props.dataChartBar.map(data => data.value);
    const dataValueMax = Math.max(...dataValues);

    return (
        <div className='chart'>
            {props.dataChartBar.map(data =>
                <ChartBar
                    key={data.label}
                    value={data.value}
                    maxValue={dataValueMax}
                    label={data.label} />)}
        </div>
    )
}

export default Chart