import data from '@/data.json';
import Section from './UI/Section';

const { clients } = data;

export const ClientsSection = () => {
    return (
        <Section
            wrapperClassName="bg-one"
            name="hero_client"
            style={{
                borderTop: " 1px solid #fff"
            }}
        >
            <h2>
                <span>{clients.mainTitle}</span>
                <br />
                {clients.subTitle}
            </h2>


            <ul role="list">
                {
                    clients.logos.map((imageItem, i) => (
                        <li
                            key={i}
                            style={{ backgroundImage: `url(${imageItem.url})` }}
                        />
                    ))
                }
            </ul>
        </Section >
    )
}