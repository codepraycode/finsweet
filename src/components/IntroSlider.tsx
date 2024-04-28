import React, { useEffect, useState } from 'react'
import BtnSlider from './BtnSlider'
import { dataSlider } from '@/data/data-slider'
import "../styles/slider.css"
import Image from 'next/image'

export default function IntroSlider() {

    const [slideIndex, setSlideIndex] = useState<number>(1)

    const [data, setData] = useState(dataSlider[slideIndex - 1]);

    useEffect(() => {
        setData(dataSlider[slideIndex - 1])

        const interval = setInterval(() => {
            if (slideIndex !== dataSlider.length) {
                setSlideIndex(slideIndex + 1)
            }
            else if (slideIndex === dataSlider.length) {
                setSlideIndex(1)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [slideIndex])

    const moveDot = (index: number) => {
        setSlideIndex(index)
    }

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    return (
        <div className='hero_slide'>
            <div>
                <div className="container-slider">
                    {dataSlider.map((obj, index) => {
                        return (
                            <div
                                key={obj.id}
                                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            >
                                <Image
                                    src={obj.image}
                                    width="800"
                                    height="200"
                                    alt={obj.description}
                                />
                            </div>
                        )
                    })}

                    <div className='btn-slides'>
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                    </div>

                    <div className="container-dots">
                        {Array.from({ length: dataSlider.length }).map((item, index) => (
                            <div
                                key={index}
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}
                            ></div>
                        ))}
                    </div>
                </div>

            </div>


            <div className="slider_details bg-primary">
                <div>
                    <h2 style={{
                        fontWeight: "bolder",
                        textAlign: "center"
                    }}>{data.title}</h2>
                    <h3>{data.subTitle}</h3>
                    <span>{data.description}</span>
                </div>
            </div>
        </div>
    )
}
