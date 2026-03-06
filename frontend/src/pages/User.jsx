import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ambilAntrian, generatePdf, getNomorAntrian } from "../services/service";
import { io } from "socket.io-client";          
import { BASE_URL } from "../urlPath";           

const socket = io(BASE_URL);

const User = () => {
    const navigate = useNavigate();

    const [nomorAntrian, setNomorAntrian] = useState(0);

    const toAdminPage = () => {
        navigate('/login');
    }

    const getAntrian = async () => {
        try {
            const response = await getNomorAntrian();
            if(response.response_message == 'SUCCESS') {
                setNomorAntrian(response.data);
            }
            else {
                setNomorAntrian(0);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAntrian();

        socket.on('nomorAntrian', (antrian) => {
            setNomorAntrian(antrian);
        })

    }, [nomorAntrian]);

    const onAmbilAntrian = async () => {
        try {
            const response = await ambilAntrian();
            if(response.response_message == 'SUCCESS') {
                generatePdf(nomorAntrian);
                setNomorAntrian(response.data+1);
            }
            else {
                setNomorAntrian(0);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>  
            <div className="min-h-screen flex justify-center items-center p-10 flex-col">
                <p className="text-7xl">NO. ANTRIAN {nomorAntrian}</p>
                <button onClick={onAmbilAntrian} className="text-5xl border border-black bg-blue-300 px-3 py-5 rounded-lg cursor-pointer mt-20 mb-5">Ambil Antrian</button>
                <button onClick={toAdminPage} className="text-2xl border border-black bg-gray-500 text-white px-5 py-3 rounded-lg cursor-pointer">Admin menu</button>
            </div>
        </>
    )
}

export default User