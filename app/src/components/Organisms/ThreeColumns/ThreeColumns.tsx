import ColumnItem from "./_partials/ColumnItem"

export default function ThreeColumns({ columns }: { columns: any }) {
  return (
    <div className="px-30 grid grid-cols-12 gap-30">
      {columns.map(({ column }: any, i: number) => (
        <div key={i} className="col-span-3 first:col-span-6 space-y-30">
          {column.map(({ title, text }: any, k: number) => (
            <ColumnItem
              key={i + k}
              title={title}
              text={text}
              isMain={i == 0 && k == 0}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
