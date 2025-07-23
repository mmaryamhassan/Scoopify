import React from "react";

const About = () => {
    return (
        <>
        <section id='about' className="min-h-[40rem] flex items-center justify-center py-2 px-6">
            <div className="max-w-3xl w-full text-center">
                <h1 className="font-extrabold text-4xl md:text-5xl mb-6">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#8d4b09] to-[#5C2E00] animate-fade-forward">
                    Inside the Cone
                    </span>
                </h1>
                <p className="text-stone-700 text-lg md:text-xl leading-relaxed">
                At <span className="font-semibold text-[#8d4b09]">Scoop Society</span>,
                we’re not just serving ice cream — we’re serving moments of joy. From
                creamy vanilla dreams to rich chocolate indulgence, every scoop is
                handcrafted with love and the finest ingredients. What started as a
                little cart with big flavor has now become your go-to spot for
                chilling, chatting, and choosing your next favorite flavor. Whether
                you're a classic cone lover or a sundae explorer, you're part of our
                sweet story.
                </p>
                <p className="mt-6 text-stone-700 text-lg md:text-xl">
                Come for the flavors, stay for the fun!
                </p>

                <div className="mt-10 flex justify-center">
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8d4b09] to-[#5C2E00]" />
                </div>
            </div>
        </section>

        <style jsx>{`
            @keyframes fade-forward{
            0% {
                opacity: 0;
                transform: translateX(-50px);
            }
            100%{
                opacity:1;
                transform:translateX(0);
            }
            }
            .animate-fade-forward {
            animation: fade-forward 0.8s ease-out forwards;
            }
        `}</style>
        </>
    );
};

export default About;