import React from 'react'
import MUIDataTable, { FilterType } from "mui-datatables";

const options: FilterType | any = {
    filter: false,
    search: false,
    filterType: 'checkbox',
    selectableRows: false,
    responsive:"standard"
};

const MuiDataTable: React.FC<any> = ({ data, columns }) => {
    return (
        <div className="mt-4 table">
            <MUIDataTable
                title={""}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    )
}
export default MuiDataTable;