import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { Columns } from '@syncfusion/ej2/querybuilder';

const Food = () => {
    return(
       <div className="'m-2'md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="page" title="orders"/>
        <GridComponent id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting>
            <ColumnsDirective>
            {ordersGrid.map((item,index)=>(
                <ColumnDirective key={index}
                {...item}
                />
            ))}
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu, ExcelExport, Edit, Filter, Page, ExcelExport, PdfExport]} />
        </GridComponent>
       </div>
    )
}

export default Food;