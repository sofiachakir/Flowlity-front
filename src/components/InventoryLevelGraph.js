import React from 'react';
import Chart from "react-google-charts";

function InventoryLevelGraph(props) {
    return (            
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={props.inventoryLevelsData}

        options={{
          title: 'Inventory Levels per date',
          hAxis: {
            title: 'Date',
          },
          vAxis: {
            title: 'Inventory Level',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    )
}

export default InventoryLevelGraph;