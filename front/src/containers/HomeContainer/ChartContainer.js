import React from 'react';
import Chart from '../../components/Home/Chart/Chart';

const ChartContainer = () => {
    const DGPercent = 970;
    const DSMPercent = 975;
    const GMSPercent = 973;

    return (
        <Chart
        DGPercent={DGPercent}
        DSMPercent={DSMPercent}
        GMSPercent={GMSPercent}
        />
    )
}

export default ChartContainer;