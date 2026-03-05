
const Admin = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold mb-10">Daftar Antrian</h1>
      <table className="table-fixed border border-black ">
        <thead className="border border-black">
          <tr>
            <th className="border border-black w-50">Nomor Urut</th>
            <th className="border border-black w-50">Timestamp</th>
            <th className="border border-black w-50">Status</th>
            <th className="border border-black w-50">Aksi</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {/* masih dummy */}
          <tr className="text-center">
            <td className="border border-black">1</td>
            <td className="border border-black">2026-03-05 09:00:00</td>
            <td className="border border-black">Waiting</td>
            <td>
              <button className="cursor-pointer px-6 py-1 border border-black m-2 bg-green-400">Process</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Admin