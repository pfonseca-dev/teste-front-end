import { partnerBanner } from '../../assets/index';

import './PartnerBanners.scss'

interface PartnerBannerProps {
    title?: string;
    description?: string;
    buttonText?: string;
    image?: string;
}

export function PartnerBanner({title = 'Parceiros', description = 'Lorem ipsum dolor sit\namet, consectetur', buttonText = 'Confira', image = partnerBanner }: PartnerBannerProps) {
    return (
        <section className="partner-banner" aria-label="Oferta dos parceiros">
            <div className="container">
                <div className="partner-banner__grid">
                    {[0,1].map((index) =>(
                        <article key={index} className="partner-banner__card" style={{ backgroundImage: `linear-gradient( 90deg,rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.1)), url("${image}")`}}>
                            <div className="partner-banner__content">
                                <h2 className="partner-banner__title">{title}</h2>
                                <p className="partner-banner__description">{description}</p>
                                <button type="button" className="partner-banner__button">{buttonText}</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}