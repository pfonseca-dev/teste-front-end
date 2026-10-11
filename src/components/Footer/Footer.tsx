import { Logo, Instagram, Facebook, LinkedIn }from "../../assets"
import "./Footer.scss"

const footerGrups = [
    {
        title: 'Institucional',
        links: [
            {label: 'Sobre Nós'},
            {label: 'Movimento'},
            {label: 'Trabalhe conosco'}
        ]

    },
    {
        title: 'Ajuda',
        links: [
            {label: 'Suporte'},
            {label: 'Fale Conosco'},
            {label: 'Perguntas Frequentes'}
        ]
    },
    {
        title: 'Termos',
        links: [
            {label: 'Termos e Condições'},
            {label: 'Políticas e Privacidade'},
            {label: 'Trocas e Devoluções'}
        ]
    }
]

export function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="footer__about">
                        <div className="footer__brand">
                            <img src={Logo} alt="Econverse" className="footer__logo" />
                        </div>
                        <p className="footer__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="footer__social">
                            <img src={Instagram} alt="Instagram" className="footer__social-media"/>
                            <img src={Facebook} alt="Facebook" className="footer__social-media"/>
                            <img src={LinkedIn} alt="LinkedIn" className="footer__social-media"/>
                        </div>
                    </div>
                    <nav className="footer__navigation" aria-label="Links institucionais (indisponíveis neste teste)">
                        {footerGrups.map((group) =>
                            <div className="footer__group" key={group.title}>
                                <h2 className="footer__title">{group.title}</h2>
                                <ul className="footer__links">
                                    {group.links.map((link) =>
                                        <li key={link.label}>
                                            <a role="link" aria-disabled="true" title="Página indisponível neste teste">{link.label}</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container footer__bottom-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </footer>
    )
}
