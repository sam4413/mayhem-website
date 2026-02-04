"use client";
import Image from "next/image";
import {ImageCard, TextCard, BgImageCard, BgImageTextCard, ColoredTextCard, BgImageTextCardShaded} from "../components/cards";
import {Editable} from "../components/editable";
import {MainPageLander, SubPageLander} from "../components/navigation";
import { ButtonCard, InlineOrderedHeading, SubtitleTextCard, TitleTextCard } from "../components/cardsv2/textCards";
import { StrikeTable } from "../components/cardsv2/etc";
import { TitleImageTextCard } from "../components/cardsv2/imageCards";

export default function Rules() {
  return (
    <div className="relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-slate-950 ">
            <div className="fadeInSlowly [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_50%_500px,#17006180,transparent)]">
              
            </div>
          </div>
        </div>

        <SubPageLander
        title={<><span className="bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent">SERVER RULES & GUIDELINES</span></>}
        description="Select your game below to view the specific rules and guidelines for that server."
        properties="bg-gray-950"
        />

      </div>

      {/* Text below the main area */}
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-8 mr-8 lg:ml-36 lg:mr-36 xl:ml-96 xl:mr-96">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-8xl mx-auto">
            <TitleTextCard
              header={"🎮 Community Standards"}
              description={ <>
              <span className="montserrat-600">All Mayhem Industries servers are built on respect, fairness, and inclusivity. While each game has specific rules, our core values of no cheating, no toxicity, and respect for all players apply everywhere. Click on a game below to see detailed rules.</span>
              </>
              }
              headerProperies={"mt-4 mb-4 p-8 text-center text-purple-500 orbitron-900 border-2 border-blue-500 hover:scale-103 hover:border-purple-500 bg-blue-500/10"}
              descriptionProperties={"text-gray-400 text-center"}
            />

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-4 md:gap-2 sm:gap-1 mx-auto max-w-6xl text-white">
                <TitleImageTextCard 
                  src={"/images/cosmonauts-cta.webp"} 
                  alt={"Space Enginners"} 
                  header={<><p className="bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent text-center ">Space Engineers</p></>} 
                  description={<></>} 
                  headerProperies={"mt-4 mb-4 mr-2 ml-2 game-rule-card border-3 border-white"}
                  descriptionProperties={""}
                />
                <TitleImageTextCard 
                  src={"/images/cosmonauts-cta.webp"} 
                  alt={"Space Enginners"} 
                  header={<><p className="bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent text-center ">Space Engineers</p></>} 
                  description={<></>} 
                  headerProperies={"mt-4 mb-4 mr-2 ml-2 game-rule-card"}
                  descriptionProperties={""}
                />
                <TitleImageTextCard 
                  src={"/images/cosmonauts-cta.webp"} 
                  alt={"Space Enginners"} 
                  header={<><p className="bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent text-center ">Space Engineers</p></>} 
                  description={<></>} 
                  headerProperies={"mt-4 mb-4 mr-2 ml-2 game-rule-card"}
                  descriptionProperties={""}
                />
            </div>

            <SubtitleTextCard
              description={
              <>
              
                <p className="text-gray-400 text-sm montserrat-400"><span className="text-bold montserrat-600">Important: </span>
                Offense 1-3 will reset after 90 days. If a rule is broken within the 90 days we will proceed to offense 5. Offense 5 and Offense 6 bans apply across all Mayhem servers case by case. Offense 1 through Offense 4 warnings are server-specific. </p>
              </>

              } 
              properties="mt-4 mb-4 p-6 border-3 w-full border-blue-500 bg-blue-500/10"
              descriptionProperties=""
              />

              <SubtitleTextCard
              description={
              <>
              
                <p className="text-gray-400 text-sm montserrat-400"><span className="text-bold montserrat-600 text-shadow-yellow-500">Example of how bans work: </span><br/><br/>
                <span className="montserrat-600">Scenario 1:</span> John was playing Space Engineers steam creative and got banned on SE Steam Creative. This will account for both EOS and Steam Creative but not Survival, Minecraft, Hytale, etc.<br /> <br />

                <span className="montserrat-600">Scenario 2:</span> John is playing once again Steam creative and decided that he is going to steal a grid and be a jerk about it. John is now banned from all servers Mayhem owns. Not for stealing the grid, but for being a jerk. If he had just accepted the ban, he would still have access to the servers like survival, minecraft, etc.
                
                
                </p>
              </>

              } 
              properties="mt-4 mb-4 p-6 border-3 w-full border-yellow-500 bg-yellow-500/10"
              descriptionProperties=""
              />


          </div>
        </div>
      </main>
    </div>
  );
}



