import Image from "next/image";

export default function BtnSlider({ direction, moveSlide }: {
    direction: string,
    moveSlide: () => void
}) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <Image
                src={direction === "next" ? "/images/icons/arrow-point-right.svg" : "/images/icons/arrow-point-left.svg"}
                height={100}
                width={100}
                alt=""
            />
        </button>
    );
}