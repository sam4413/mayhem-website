"use client";
import Image from "next/image";
import Starfield from "../components/starfield";
import {ImageCard, TextCard, BgImageCard, BgImageTextCard, ColoredTextCard, BgImageTextCardShaded} from "../components/cards";
import {Editable} from "../components/editable";
import {MainPageLander, SubPageLander} from "../components/navigation";

export default function Servers() {
  return (
    <div className="relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-slate-950 ">
            <div className="fadeInSlowly [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_50%_500px,#17006180,transparent)]">
            <Starfield />
            </div>
          </div>
        </div>

        <SubPageLander
        title="SERVER RULES"
        description="View our server rules, join the community, and stay connected with the latest updates."
        
        />

      </div>

      {/* Text below the main area */}
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-8 mr-8 lg:ml-36 lg:mr-36 xl:ml-96 xl:mr-96">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-8 relative z-10 mt-8">
            <BgImageTextCardShaded
              image="/images/gamebanners/spaceengineers.jpg"
              alt="servers"
              title={<span className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-blue-400">SPACE ENGINEERS RULES</span>}
              description={ 
              <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 relative z-10">
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Creative Steam & Crossplay</span>}
                  properties={"bg-blue-500"}
                  description={<Editable path="/public/editables/rules/creative.md" />}
                />
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Factions Creative</span>}
                  properties={"bg-blue-800"}
                  description={<Editable path="/public/editables/rules/factionscreative.md" />}
                />
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Scrapyard Survival</span>}
                  properties={"bg-amber-500"}
                  description={<Editable path="/public/editables/rules/scrapyard.md" />}
                />
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Mayhem Vanilla Survival with NO limits</span>}
                  properties={"bg-rose-500"}
                  description={<Editable path="/public/editables/rules/crossplayvanillasurvival.md" />}
                />
                
              </div>
              }
            />
            <BgImageTextCardShaded
              image="/images/gamebanners/rust.jpg"
              alt="servers"
              title={<span className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-amber-600">RUST RULES</span>}
              description={ 
              <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 relative z-10">
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Mayhem Rust</span>}
                  properties={"bg-amber-800"}
                  description={<Editable path="/public/editables/rules/rust.md" />}
                />  
                
              </div>
              }
            />

            <BgImageTextCardShaded
              image="/images/gamebanners/ark.webp"
              alt="servers"
              title={<span className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-green-700">ARK</span>}
              description={ 
              <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 relative z-10">
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Mayhem Ark</span>}
                  properties={"bg-green-900"}
                  description={<Editable path="/public/editables/rules/ark.md" />}
                />  
                
              </div>
              }
            />

            <BgImageTextCardShaded
              image="/images/gamebanners/7d2d.jpg"
              alt="servers"
              title={<span className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-red-500">7 DAYS TO DIE</span>}
              description={ 
              <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 relative z-10">
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">7 Days to Die</span>}
                  properties={"bg-red-950"}
                  description={<Editable path="/public/editables/rules/7d2d.md" />}
                />  
                
              </div>
              }
            />

            <BgImageTextCardShaded
              image="/images/gamebanners/projectzomboid.jpg"
              alt="servers"
              title={<span className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-amber-600">PROJECT ZOMBOID</span>}
              description={ 
              <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 relative z-10">
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Project Zomboid</span>}
                  properties={"bg-amber-950"}
                  description={<Editable path="/public/editables/rules/projectzomboid.md" />}
                />  
                
              </div>
              }
            />



            <BgImageTextCardShaded
              image="/images/gamebanners/minecraft.jpg"
              alt="minecraft"
              title={<span className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-green-500">MINECRAFT RULES</span>}
              description={
              <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 relative z-10">
                <ColoredTextCard
                  title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Minecraft</span>}
                  properties={"bg-green-500"}
                  description={<Editable path="/public/editables/rules/minecraft.md" />}
                />
              </div>
              }
            />

            <BgImageTextCardShaded
              image="/images/gamebanners/discordbanner.jpg"
              alt="discord"
              title={<span className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lexend-mega-landing text-blue-500">DISCORD RULES</span>}
              description={
                <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 relative z-10">
                  <ColoredTextCard
                    title={<span className="text-2xl text-center font-semibold text-white">Discord</span>}
                    properties={"bg-purple-500"}
                    description={<Editable path="/public/editables/rules/discord.md" />}
                  />                  
              </div>

              }
            />
            
          </div>
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



