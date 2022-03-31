import React from 'react';
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const Taxes = () => {

    let columns = [
        'ID',
        'State Name',
        'Tax%',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <button className={'btn'}>
                            Save
                        </button>
                    )
                }
            },
        }
    ]
    const data = [
        ["1", "Alabama", '2%'],
        ["2", "Alaska", '3%'],
        ["3", "Arizona", '1%'],
        ["4", "Arkansas", '2.5%'],
        ["4", "California", '3.3%'],
    ];

    return (
        <div className={'page_responsive'}>
            <h3>Taxes</h3>
            <MuiDataTable data={data} columns={columns} />
        </div>
    );
};
export default Taxes;