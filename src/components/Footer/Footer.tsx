import { Logo, Instagram, Facebook, LinkedIn }from "../../assets"
import "./Footer.scss"

const footerGrups = [
    {
        title: 'Institucional',
        links: [
            {label: 'Sobre Nós', href: '#sobre'},
            {label: 'Movimento', href: '#movimento'},
            {label: 'Trabalhe conosco', href: '#carreiras'}
        ]

    },
    {
        title: 'Ajuda',
        links: [
            {label: 'Suporte', href: '#suporte'},
            {label: 'Fale Conosco', href: '#contato'},
            {label: 'Perguntas Frequentes', href: '#perguntas'}
        ]
    },
    {
        title: 'Termos',
        links: [
            {label: 'Termos e Condições', href: '#termos'},
            {label: 'Políticas e Privacidade', href: '#policitas'},
            {label: 'Trocas e Devoluções', href: '#devolucao'}
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
                    <nav className="footer__navigation" aria-label="Links do footer">
                        {footerGrups.map((group) =>
                            <div className="footer__group" key={group.title}>
                                <h3 className="footer__title">{group.title}</h3>
                                <ul className="footer__links">
                                    {group.links.map((link) =>
                                        <li key={link.label}>
                                            <a href={link.href}>{link.label}</a>
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