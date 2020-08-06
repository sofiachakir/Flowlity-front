import React from 'react';
import Chart from "react-google-charts";

function InventoryLevelGraph(props) {
    return (            
      <Chart
        width={'100%'}
        height={'500'}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={props.inventoryLevelsData}

        options={{
          title: 'Inventory Levels per date',
          hAxis: {
            title: 'Day',
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