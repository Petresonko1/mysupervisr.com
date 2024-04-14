import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Clients(){
    const clientData =[
        {
            image:"/images/client/01.jpg",
            image1:"/images/client/02.jpg",
            name:'Thomas Israel',
            name1:'Barbara McIntosh',
            desc:"I didnt know a thing about smart academic research until I found this website. Now I can create excellent academic resaerch papaers I need in no time. Great resource!",
            desc1:"There are so many things I had to do with my old approach that I just dont do at all with Mysupervisr. Suspicious but I cant say I dont love it."
        },
        {
            image:"/images/client/03.jpg",
            image1:"/images/client/04.jpg",
            name:'Carl Oliver',
            name1:'Jill Webb',
            desc:"The best part about Mysupervisr is every time I pay my subscription, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
            desc1:"I have managed to get clean As straight from my Cs. Am greatful!"
        },
        {
            image:"/images/client/05.jpg",
            image1:"/images/client/06.jpg",
            name:'Barbara McIntosh',
            name1:'Janisha Doll',
            desc:"I used to struggle so much in my studies. With Mysupervisr I do not worry anymore. I can now have my free time.",
            desc1:"Excellent Tool."
        },
    ]
        return(
            <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Mysupervisr makes it fast easy to create content for your research, social media, website, and more!</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {clientData.map((item,index)=>{
                        return(
                            <div className="grid grid-cols-1 gap-6 h-fit" key={index}>
                                <div className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400 bg-white dark:bg-slate-900 h-fit">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                        <div className="ps-4">
                                            <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">User</p>
                                        </div>
                                    </div>
            
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.desc}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
            
                                <div className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400 bg-white dark:bg-slate-900 h-fit">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image1} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                        <div className="ps-4">
                                            <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{item.name1}</Link>
                                            <p className="text-slate-400">User</p>
                                        </div>
                                    </div>
            
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.desc1}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </>
        )
}