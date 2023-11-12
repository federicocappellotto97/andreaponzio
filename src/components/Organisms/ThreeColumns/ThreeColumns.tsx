import ColumnItem from './_partials/ColumnItem'

export default function ThreeColumns({ columns }: { columns: any }) {
  return (
    <div className="px-30 grid grid-cols-1 md:grid-cols-12 gap-30">
      {columns.map(({ column }: any, i: number) => (
        <div key={i} className="md:col-span-6 lg:col-span-3 first:md:col-span-12 first:lg:col-span-6 space-y-30">
          {column.map(({ title, text }: any, k: number) => (
            <ColumnItem key={i + k} title={title} text={text} isMain={i == 0 && k == 0} index={i} />
          ))}
        </div>
      ))}
    </div>
  )
}
