import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TableOptions, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable } from "@tanstack/react-table";
import { useContext, createContext } from "react";

interface Props<T> extends Omit<TableOptions<T>, 'getCoreRowModel'> {
  emptyMessageComponent?: () => React.JSX.Element;
}

interface IContextProps {
  columnsLength: number;
}

const ctx = createContext({} as IContextProps);

export const useCtx = () => useContext(ctx);

export function Content<T>({
  data,
  columns,
  emptyMessageComponent,
  ...props
}: Props<T>) {

  const table = useReactTable({
    ...props,
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    defaultColumn: {
      minSize: 0,
      size: Number.MAX_SAFE_INTEGER,
      maxSize: Number.MAX_SAFE_INTEGER,
    },
  })

  const rowsLength = data.length;
  const hasRows = rowsLength > 0;
  const columnsLength = columns.length;

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext(),
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : []}
        {!hasRows && emptyMessageComponent && (
          <ctx.Provider value={{ columnsLength }}>
            <tr>{emptyMessageComponent()}</tr>
          </ctx.Provider>
        )}
      </TableBody>
    </Table>
  )
}