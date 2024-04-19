
import siteData from "@/data/common.json";

import Image from "next/image";

const { footer } = siteData;


const FooterSection = () => {
    return (
        <>
            <footer className="container footer-bottom">
                <span className="copyright">
                    {footer.copyright}
                </span>

                <div className="contacts">
                    <div>
                        <Image alt="Address" src="/images/icons/file-write.svg" width={30} height={30} />
                        <span>
                            Behind NCAA head office , Airside, N.A.I.A ABUJA AIRPORT
                        </span>
                    </div>

                    <div>

                        <Image alt="Address" src="/images/icons/contact.svg" width={30} height={30} />
                        <span>
                            <a href="tel:+2347068886283">+2347068886283</a>&nbsp;,&nbsp;
                            <a href="tel:+2348094906968">+2348094906968</a>
                        </span>
                    </div>


                </div>
            </footer >
        </>
    )
}

export default FooterSection;