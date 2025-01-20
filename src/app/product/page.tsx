import TableComponent from "@/components/widgets/TableComponent";
import React from "react";
import { productColumns, products, productStatusOptions,productStatusColorMap,PRODUCT_INITIAL_VISIBLE_COLUMNS } from "@/utils/tableProps";
  
const page = () => {
      
  return (
    <div className="overflow-y-scroll mt-3 p-2 bg-white h-lvh">
      <TableComponent
        columns={productColumns}
        data={products}
        statusOptions={productStatusOptions}
        statusColorMap={productStatusColorMap}
        VISIBLE_COLUMNS={PRODUCT_INITIAL_VISIBLE_COLUMNS}
      />
    </div>
  );
};

export default page;
