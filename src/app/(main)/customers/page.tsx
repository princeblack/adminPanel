"use client"
import TableComponent from "@/components/widgets/TableComponent";
import React from "react";
import { customersColumns, customers, customersStatusOptions,customersStatusColorMap,CUSTOMERS_INITIAL_VISIBLE_COLUMNS } from "@/utils/tableProps";
  
const page = () => {
      
  return (
    <div className="overflow-y-scroll mt-3 p-2 bg-white h-lvh">
      <TableComponent
        columns={customersColumns}
        data={customers}
        statusOptions={customersStatusOptions}
        statusColorMap={customersStatusColorMap}
        VISIBLE_COLUMNS={CUSTOMERS_INITIAL_VISIBLE_COLUMNS}
      />
    </div>
  );
};

export default page;
