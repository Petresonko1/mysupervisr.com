import React from "react";
import {FiEdit2, FiAirplay, FiCreditCard, FiGlobe, FiLayout,FiLifeBuoy} from "../assets/icons/vander"
export default function AiFeatures(){
    const featureData = [
        {
            icon:FiEdit2,
            title:'AI Generator',
            desc:'Powerful AI generator capble of performing document analysis, feedback generation, summarization, and article recommendations,'
        },
        {
            icon:FiAirplay,
            title:'Advanced Dashboard',
            desc:'A detailed dashboard that displays all the required information without straining.'
        },
        {
            icon:FiCreditCard,
            title:'Payment Gateways',
            desc:'It has incorperated universla payment methods that allow users from all parts of the world to make payments easily'
        },
        {
            icon:FiGlobe,
            title:'Multi-Lingual',
            desc:'Supports different languages'
        },
        {
            icon:FiLayout,
            title:'Custom Recommendations',
            desc:'Gives instant user feedback and recommends the best solution'
        },
        {
            icon:FiLifeBuoy,
            title:'Support Platform',
            desc:'The supoort team is always ready and willing to help at any time.'
        },
    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">The future of AI in academic research.</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Mysupervisr makes it fast easy to create content for your research, social media, website, and more!</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                    {featureData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                            <div className="group flex duration-500 xl:p-3" key={index}>
                                <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-amber-400/5 group-hover:bg-amber-400 group-hover:text-white border-2 border-amber-400/20 text-amber-400 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                                    <Icon className="w-5 h-5"/>
                                </div>
                                <div className="flex-1 ms-4">
                                    <h4 className="mb-0 text-lg font-semibold">{item.title}</h4>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
