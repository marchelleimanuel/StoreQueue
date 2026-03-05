import { useEffect, useState } from "react";
import { getDaftarAntrian, updateDaftarAntrian } from "../services/service";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [daftarAntrian, setDaftarAntrian] = useState([]);
  const [updated, setUpdated] = useState(false);

  const getData = async () => {
    try {
      const response = await getDaftarAntrian();
      if(response.response_message === 'SUCCESS') {
        setDaftarAntrian(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [updated]);

  const onClickProcess = async (queue_number) => {
    try {
      const response = await updateDaftarAntrian(queue_number);
      if(response.response_message === 'SUCCESS') {
        setUpdated(!updated);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col my-10">
      <div className="flex justify-center items-center mb-10">
        <button onClick={() => navigate('/home')} className="cursor-pointer border border-black px-6 y-2 mr-10 bg-gray-400">Back</button>
        <h1 className="text-5xl font-bold">Daftar Antrian</h1>
      </div>
      <table className="table-fixed border border-black ">
        <thead className="border border-black">
          <tr>
            <th className="border border-black w-50">Nomor Urut</th>
            <th className="border border-black w-50">Waktu Datang</th>
            <th className="border border-black w-50">Status</th>
            <th className="border border-black w-50">Aksi</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {daftarAntrian.map((data) => (
            <tr className="text-center h-15" key={data.queue_number}>
              <td className="border border-black">{data.queue_number}</td>
              <td className="border border-black">{data.created_at.split('.')[0].split('T').join(' ')}</td>
              <td className="border border-black">{data.status}</td>
              <td className="border border-black">
                {data.status === 'Waiting' && <button className={`cursor-pointer px-6 py-1 border border-black m-2 bg-green-400`} onClick={() => onClickProcess(data.queue_number)}>Process</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin