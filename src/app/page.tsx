"use client";
import Image from "next/image";
import Starfield from "./components/starfield";
import { FaDiscord } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import {ImageCard, BgImageCard} from "./components/cards";
import {Editable} from "./components/editable";
import { MainPageLander } from "./components/navigation";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
      </div>

      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-slate-950 ">
            <div className="fadeInSlowly [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_50%_500px,#17006180,transparent)]">
            <Starfield />
            </div>
          </div>
        </div>
        <div className="relative z-10 flex h-full flex-1 items-center justify-center px-4">
              <div className="text-center">
                <h1 className="text-4xl xl:text-8xl lg:text-6xl md:text-4xl font-bold tracking-tight text-white">
                  <span className="lexend-mega-landing bg-radial from-blue-300 to-purple-950 bg-clip-text text-transparent">MAYHEM INDUSTRIES</span>
                </h1>
                <p className="lexend-mega-landing mx-auto mb-8 text-2xl text-white">
                  Connect, discuss, and conquer in a community made for gamers.
                </p>
                <div className="inline-flex border border-slate-200 rounded-none overflow-hidden">
                  <a
                    href="/servers"
                    className="lg:min-w-xs relative flex items-center justify-center hover:bg-blue-800 bg-slate-950/50 text-slate-200 font-extrabold transition-all duration-200 text-lg md:text-xl lg:text-2xl px-6 py-2 md:px-8 md:py-3 lg:px-16 lg:py-4 border-r border-slate-200 tracking-wide group focus:outline-none"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-slate-200 border-l-[20px] border-l-transparent  transition-all duration-200 -rotate-90"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <IoGameController /> JOIN NOW
                    </span>
                  </a>
                  <a
                    href="https://discord.gg/mayhemindustries"
                    className="lg:min-w-xs relative flex items-center justify-center hover:bg-blue-800 bg-slate-950/50 text-slate-200 font-extrabold transition-all duration-200 text-lg md:text-xl lg:text-2xl px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 tracking-wide group focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-slate-200 border-r-[20px] border-r-transparent transition-all duration-200 rotate-270"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <FaDiscord /> DISCORD
                    </span>
                  </a>
                </div>
              </div>
            </div>
        
      </div>

      {/* Text below the main area */}
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-8 mr-8 lg:ml-72 lg:mr-72">
        <section className="p-6 rounded-lg mt-16">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-blue-400">OUR MISSION</h2>
          <div className="text-xl lg:text-2xl"><Editable path="/public/editables/home/ourmission.md"/></div>
        </section>
        <section className="p-6 rounded-lg mt-16">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-blue-400">WHAT WE DO</h2>
          <p className="text-xl lg:text-2xl">Explore our services and find the perfect fit for your gaming experience.</p>
          {/* ImageCards */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 mt-8">
            <ImageCard
              image="/images/whatwedo/minecraft.png"
              alt="minecraft"
              text={<Editable path="/public/editables/home/what_we_do/fourms.md"/>}
            />
            <ImageCard
              image="/images/whatwedo/spaceengineers.png"
              alt="space engineers"
              text={<Editable path="/public/editables/home/what_we_do/crossplay.md"/>}
            />
            <BgImageCard
              image="/images/whatwedo/rust.png"
              alt="rust"
              text={<Editable path="/public/editables/home/what_we_do/multiplegames.md"/>}
            />
            
          </div>


        </section>

        <section className="p-6 rounded-lg mt-16">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-blue-400">OUR SERVERS</h2>
          <p className="text-xl lg:text-2xl">As we self host our top of the line AMD AM4 and AM5 Ryzen servers, experience unparallelled and smooth gameplay across all our servers.</p>
          {/* ImageCards */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 mt-8">
            <BgImageCard
              image="/images/server1.webp"
              alt="servers"
              text={<Editable path="/public/editables/home/our_servers/server1.md"/>}
            />
            <BgImageCard
              image="/images/server2.webp"
              alt="space engineers"
              text={<Editable path="/public/editables/home/our_servers/server2.md"/>}
            />
            <BgImageCard
              image="/images/server3.webp"
              alt="rust"
              text={<Editable path="/public/editables/home/our_servers/server3.md"/>}
            />
            
          </div>


        </section>
      </main>

      {/* Starfield and CometField components */}
      <style jsx global>{`
        .star {
          pointer-events: none;
          position: absolute;
          border-radius: 9999px;
          background: white;
          opacity: 0.7;
          animation: star-twinkle 2s infinite alternate;
        }
        @keyframes star-twinkle {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
