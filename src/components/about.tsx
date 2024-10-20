"use client";

function About() {
    return (
        <div className="flex flex-col md:flex-row text-white max-w-[95rem] mx-auto py-10 px-3">
            <div className="md:w-2/12 flex items-center justify-center text-2xl flex-col mb-3"><div className="uppercase">About</div> <div className="text-start text-5xl  font-thin tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">VISH</div>  </div>
            <div className="md:w-10/12 text-sm text-justify">Vish is a professional Mind Reader and Magician from Bangalore, India. He is one of the
                few performers in the world who performs what is called "Mentalism" or Sleight f Mind. He entertains the corporate world and has also performed for a number of private parties.
                His unique skills combined with his professionalism have resulted in him quickly becoming one of the most sought after entertainer country today.
                Having performed for Celebrity’s, Sports Stars and Politicians .He is considered by his peers to be one of the most creative performers of this kind in the world today.
            </div>
        </div>
    )
}

export default About;