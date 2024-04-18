import React, { useEffect, useState } from 'react'
import BtnSlider from './BtnSlider'
import { dataSlider } from '@/data/data-slider'
import "../styles/slider.css"
import Image from 'next/image'

export default function Slider() {

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
        <div style={{
            display: "flex",
            height: "92vh",
        }}>
            <div style={{
                width: "60vw"
            }}>
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
                                    alt="yeah"
                                />
                            </div>
                        )
                    })}

                    <div >
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                    </div>

                    <div className="container-dots">
                        {Array.from({ length: dataSlider.length }).map((item, index) => (
                            <div
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}
                            ></div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="slider_details" style={{
                width: "40vw",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60%"
                }}>
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