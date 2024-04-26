import data from '@/data.json';
import Button from "../UI/Button";
import { SearchAviationServices } from '../SearchAviationServices';

const { hero } = data;

const LeftHero = () => {
    const styles: {
        container: React.CSSProperties
    } = {
        container: {
            // marginInline: "auto",
            // width: "550px",
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center',
        }
    }
    return (
        <div
            className="hero_left"
            style={styles.container}
        >
            <div>
                <h1>{hero.mainText}</h1>
                <div className='sub_text_header'>
                    We do the best
                </div>
                <div className='sub_text'>
                    {hero.subText}
                </div>
                <Button
                    label={`Experience Us`}
                    link={hero.cta.link}
                    className="btn-with-arrow btn-shape-bg"
                />
            </div>
        </div>
    )
}

const RightHero = () => {
    return (
        <div className="hero_right">
            <div style={{
                height: "100%",
                padding: "1% 1%",
                // border: "1px solid #fff",
                // backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}>
                <SearchAviationServices />
            </div>
        </div>
    )
}


const HeroSection = () => {
    return (
        <div className="hero bg-sky">
            <LeftHero />
            <RightHero />
        </div>

    )
}

export default HeroSection;