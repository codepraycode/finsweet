'use client';


import { Aviation } from "@/lib/nobox/AvitaionStructure";


export default function SearchItems({item}: {item: Aviation}) {

    const breakPoint = 150;

    const detail_text = item.detail.slice(1,breakPoint) + (item.detail.length > breakPoint ? "..." : '')

    return (
        <div className="search-item card">
            <div className="item-image" style={{backgroundImage:`url(https://images-platform.99static.com//gME9hTDL1oxGnWMUyN-fAFAexOo=/76x99:1588x1611/fit-in/500x500/99designs-contests-attachments/108/108601/attachment_108601871)`}}/>

            <div className="item-detail">
                <h2 className="section-h3">{item.name}</h2>

                <div className="routes">

                    {
                        item.routes.map((val, i)=>{
                            return (
                                <p className="route" key={i}>
                                    <span>{val.from}</span>
                                    <span>{val.to}</span>
                                </p>
                            )
                        })
                    }

                </div>


                <p className="section-p">{detail_text}</p>
                <a href={item.link} className="cta">See more</a>

            </div>


            
        </div>
    )
}
