import React, { useState, useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Item = {
  id: number;
  name: string;
  price: number;
  tax: number;
  fee: number;
};

const calculateTotal = (item: Item) => {
  return item.price + item.tax + item.fee;
};

const Question4: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1', price: 100, tax: 10, fee: 0 },
    { id: 2, name: 'Item 2', price: 200, tax: 20, fee: 0 },
    { id: 3, name: 'Item 3', price: 300, tax: 30, fee: 0 },
  ]);

  const columnHelper = createColumnHelper<Item>();

  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        cell: ({ row }) => row.original.name,
        header: () => <span>Name</span>,
      }),
      columnHelper.accessor('price', {
        cell: ({ row }) => `$${row.original.price}`,
        header: () => <span>Price</span>,
      }),
      columnHelper.accessor('tax', {
        cell: ({ row }) => `$${row.original.tax}`,
        header: () => <span>Tax</span>,
      }),
      columnHelper.accessor('fee', {
        cell: ({ row }) => (
          <Input
            type="number"
            value={row.original.fee}
            onChange={e => {
              const newFee = parseFloat(e.target.value) || 0;
              setItems(old =>
                old.map(item =>
                  item.id === row.original.id
                    ? { ...item, fee: newFee }
                    : item
                )
              );
            }}
          />
        ),
        header: () => <span>Fee</span>,
      }),
      columnHelper.display({
        id: 'total',
        cell: ({ row }) => `$${calculateTotal(row.original)}`,
        header: () => <span>Total</span>,
        footer: () => (
            <div>
                {items.reduce((total, item) => total + calculateTotal(item), 0)}
            </div>
        )
      }),
    ],
    [setItems, items]
  );

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Question 4</h1>
      <p className="mb-4">
        This table has an issue. Can you identify and fix it?
      </p>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Question4;