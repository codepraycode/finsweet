import data from '@/data.json';
import Slider from './Slider';
import HeroSection from './Hero';

const { hero } = data;



const SlidingHero = () => {
    return (
        <div>
            <section>
                <Slider />
                <HeroSection />
            </section >
        </div >

    )
}

export default SlidingHero;