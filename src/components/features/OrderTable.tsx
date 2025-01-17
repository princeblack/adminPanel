"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";


export const columns = [
  { name: "Order ID", uid: "orderId", sortable: true },
  { name: "Customer Name", uid: "customerName", sortable: true },
  { name: "Product", uid: "product", sortable: true },
  { name: "Quantity", uid: "quantity", sortable: true },
  { name: "Total Price", uid: "totalPrice", sortable: true },
  { name: "Order Status", uid: "status", sortable: true },
  { name: "Actions", uid: "actions" },
];

export const statusOptions = [
  { name: "Pending", uid: "pending" },
  { name: "Shipped", uid: "shipped" },
  { name: "Delivered", uid: "delivered" },
  { name: "Cancelled", uid: "cancelled" },
];

export const orders = [
  {
    orderId: 101,
    customerName: "John Doe",
    product: "Smartphone",
    quantity: 2,
    totalPrice: "$1200",
    status: "pending",
  },
  {
    orderId: 102,
    customerName: "Jane Smith",
    product: "Laptop",
    quantity: 1,
    totalPrice: "$1500",
    status: "shipped",
  },
  {
    orderId: 103,
    customerName: "Alice Johnson",
    product: "Headphones",
    quantity: 3,
    totalPrice: "$300",
    status: "delivered",
  },
  {
    orderId: 104,
    customerName: "Bob Brown",
    product: "Monitor",
    quantity: 1,
    totalPrice: "$400",
    status: "cancelled",
  },
  {
    orderId: 105,
    customerName: "Charlie Green",
    product: "Tablet",
    quantity: 2,
    totalPrice: "$800",
    status: "pending",
  },
  {
    orderId: 106,
    customerName: "Diana Blue",
    product: "Keyboard",
    quantity: 4,
    totalPrice: "$200",
    status: "delivered",
  },
  {
    orderId: 107,
    customerName: "Edward White",
    product: "Mouse",
    quantity: 3,
    totalPrice: "$150",
    status: "shipped",
  },
  {
    orderId: 108,
    customerName: "Fiona Black",
    product: "Desk Chair",
    quantity: 1,
    totalPrice: "$250",
    status: "cancelled",
  },
  {
    orderId: 109,
    customerName: "George Red",
    product: "Smartwatch",
    quantity: 2,
    totalPrice: "$500",
    status: "pending",
  },
  {
    orderId: 110,
    customerName: "Hannah Gold",
    product: "Gaming Console",
    quantity: 1,
    totalPrice: "$600",
    status: "shipped",
  },
  {
    orderId: 111,
    customerName: "Ian Violet",
    product: "Graphics Card",
    quantity: 1,
    totalPrice: "$700",
    status: "delivered",
  },
  {
    orderId: 112,
    customerName: "Julia Pink",
    product: "External Drive",
    quantity: 5,
    totalPrice: "$500",
    status: "pending",
  },
  {
    orderId: 113,
    customerName: "Kyle Orange",
    product: "Webcam",
    quantity: 2,
    totalPrice: "$200",
    status: "cancelled",
  },
  {
    orderId: 114,
    customerName: "Laura Cyan",
    product: "Printer",
    quantity: 1,
    totalPrice: "$350",
    status: "shipped",
  },
  {
    orderId: 115,
    customerName: "Mark Lime",
    product: "Router",
    quantity: 3,
    totalPrice: "$300",
    status: "pending",
  },
  {
    orderId: 116,
    customerName: "Nina Silver",
    product: "Fitness Tracker",
    quantity: 2,
    totalPrice: "$400",
    status: "delivered",
  },
  {
    orderId: 117,
    customerName: "Oscar Bronze",
    product: "Camera",
    quantity: 1,
    totalPrice: "$900",
    status: "shipped",
  },
  {
    orderId: 118,
    customerName: "Paula Indigo",
    product: "Microwave",
    quantity: 1,
    totalPrice: "$250",
    status: "cancelled",
  },
  {
    orderId: 119,
    customerName: "Quinn Navy",
    product: "Air Conditioner",
    quantity: 1,
    totalPrice: "$1200",
    status: "pending",
  },
  {
    orderId: 120,
    customerName: "Rachel Magenta",
    product: "Dishwasher",
    quantity: 1,
    totalPrice: "$800",
    status: "shipped",
  },
  {
    orderId: 121,
    customerName: "Steve Teal",
    product: "Oven",
    quantity: 1,
    totalPrice: "$700",
    status: "delivered",
  },
  {
    orderId: 122,
    customerName: "Tina Rose",
    product: "Refrigerator",
    quantity: 1,
    totalPrice: "$1000",
    status: "pending",
  },
];

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const PlusIcon = ({ size = 24, width, height, ...props }: { size?: number, width?: number, height?: number, [key: string]: unknown }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M6 12h12" />
        <path d="M12 18V6" />
      </g>
    </svg>
  );
};

export const VerticalDotsIcon = ({ size = 24, width, height, ...props }: { size?: number, width?: number, height?: number, [key: string]: unknown }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({ strokeWidth = 1.5, ...otherProps }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...otherProps}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const statusColorMap: Record<string, "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined> = {
  pending: "warning",
  shipped: "primary",
  delivered: "success",
  cancelled: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "customerName",
  "product",
  "quantity",
  "totalPrice",
  "status",
  "actions",
];

export default function OrderTable() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set());
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(orders.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns.size === columns.length) return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...orders];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((order) =>
        order.customerName.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((order) =>
        Array.from(statusFilter).includes(order.status)
      );
    }

    return filteredUsers;
  }, [filterValue, statusFilter, hasSearchFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column as keyof typeof a];
      const second = b[sortDescriptor.column as keyof typeof b];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

   const renderCell = React.useCallback((order: typeof orders[0], columnKey: string) => {
      const cellValue = order[columnKey as keyof typeof order];

    switch (columnKey) {
      case "customerName":
        return (
          <User
            avatarProps={{ radius: "full", size: "sm", src: "" }}
            classNames={{
              description: "text-default-500",
            }}
            // description={order?.email}
            name={cellValue}
          >
            {/* {order?.email} */}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-500">
              {/* {order?.team} */}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[order.status as keyof typeof statusColorMap]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" width={24} height={24} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view">View</DropdownItem>
                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem key="delete">Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={(keys) => setStatusFilter(Array.from(keys).join(','))}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={(keys) => setVisibleColumns(new Set(Array.from(keys) as string[]))}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="bg-foreground text-background"
              endContent={<PlusIcon width={24} height={24} />}
              size="sm"
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {orders.length} orders
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, statusFilter, visibleColumns, onSearchChange, onRowsPerPageChange]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys.size === items.length
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]/tr:first:before:rounded-none",
        "group-data-[first=true]/tr:last:before:rounded-none",
        // middle
        "group-data-[middle=true]/tr:before:rounded-none",
        // last
        "group-data-[last=true]/tr:first:before:rounded-none",
        "group-data-[last=true]/tr:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      sortDescriptor={{ column: sortDescriptor.column, direction: sortDescriptor.direction as 'ascending' | 'descending' }}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={(keys) => setSelectedKeys(new Set(keys as unknown as string[]))}
      onSortChange={(descriptor) => setSortDescriptor(descriptor as { column: string, direction: 'ascending' | 'descending' })}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No orders found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.orderId}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey as string)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
