import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export function UncontrolledCarousel() {
    return (
        <Carousel>
            <Carousel.Item>

                <div style={{
                    backgroundColor: "red",
                }}><Image src={"https://via.placeholder.com/1200x400"} width={800} height={400} alt="hey" /></div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{
                    backgroundColor: "red",
                }}><Image src={"https://via.placeholder.com/1200x400"} width={800} height={400} alt="hey" /></div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{
                    backgroundColor: "red",
                }}><Image src={"https://via.placeholder.com/800x400"} width={800} height={400} alt="hey" /></div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}