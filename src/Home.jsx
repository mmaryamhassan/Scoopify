import React from "react";
import IcecreamImg from "./assets/icecream-promo.png";
import Flavors from "./Flavors";
//import { useNavigate } from 'react-router-dom';
export const Home = () => {
    //const navigate = useNavigate();
    return (
        <main id="home" className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-100 px-6 py-12 animate-fade-in-up">
        <section className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6 animate-fade-in-up">
                <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 text-5xl md:text-7xl leading-tight">
                    SCOOP IT BEFORE IT MELTS!
                </h1>
                {/* <button className="mt-3 w-fit px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold shadow-xl hover:shadow-rose-500/30 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => Flavors}>
                    View Flavors 
                </button> */}
            </div>

            <div className="relative group">
                <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-sm shadow-lg -rotate-6 group-hover:rotate-0 transition-transform duration-500 " />
                <img src={IcecreamImg} alt="Ice-cream promo"
                    className="relative rounded-3xl shadow-2xl mx-auto object-cover w-full h-auto max-h-[28rem] transform group-hover:scale-105 transition-transform duration-500 animate-fade-in-up"
                />
            </div>
        </section>

        <style jsx>{`
            @keyframes fade-in-up {
            0% {
                opacity: 0;
                transform: translateY(50px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
            }
            .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            }
        `}</style>
        </main>
    );
};
export default Home;