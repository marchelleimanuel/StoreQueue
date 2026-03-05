import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const User = () => {
    const navigate = useNavigate();

    const toAdminPage = () => {
        navigate('/login');
    }

    return (
        <>  
            <div className="min-h-screen flex justify-center items-center p-10 flex-col">
                <p className="text-7xl">NO. ANTRIAN</p>
                <button className="text-5xl border border-black bg-blue-300 px-3 py-5 rounded-lg cursor-pointer mt-20 mb-5">Ambil Antrian</button>
                <button onClick={toAdminPage} className="text-2xl border border-black bg-gray-500 text-white px-5 py-3 rounded-lg cursor-pointer">Admin menu</button>
            </div>
        </>
    )
}

export default User