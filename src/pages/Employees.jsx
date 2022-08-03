import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { Columns } from '@syncfusion/ej2/querybuilder';

const Employees = () => {
    return(
       <div className="'m-2'md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="page" title="Employees"/>
        <GridComponent id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['search']}
        width="auto">
            <ColumnsDirective>
            {employeesGrid.map((item,index)=>(
                <ColumnDirective key={index}
                {...item}
                />
            ))}
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar]} />
        </GridComponent>
       </div>
    )
}

export default Employees;