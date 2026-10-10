import { useEffect, useState, type FormEvent } from 'react';

import './Newsletter.scss';

export function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [isClosing, setIsClosing] = useState(false); 

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !accepted) {
      return;
    }

    setIsClosing(false)
    setSubmitted(true);
  }

  useEffect(() => {
    if (!submitted) return;

    const closeTimeout = setTimeout(() => {
      setIsClosing(true);
    }, 4000);

    const removeTimeout = setTimeout(() => {
      setSubmitted(false);
      setIsClosing(false);
    }, 4500);

    return () => {
      clearTimeout(closeTimeout);
      clearTimeout(removeTimeout);
    };
  }, [submitted]);

  return ( 
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h2 id="newsletter-title" className="newsletter__title">
              Inscreva-se na nossa newsletter
            </h2>

            <p className="newsletter__description">
              Assine a nossa newsletter e receba novidades e ofertas exclusivas.
            </p>
          </div>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <div className="newsletter__fields">
              <label className="newsletter__field">
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>

              <label className="newsletter__field">
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <button type="submit" className="newsletter__button">INSCREVER-SE</button>
            </div>
            <label className="newsletter__checkbox">
              <input
                type="checkbox"
                name="privacy"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                required
              />
              <span>Aceito os termos e condições</span>
            </label>
            {submitted && (
              <p className={`newsletter__feedback ${ isClosing ? 'newsletter__feedback--closing' : ''}`} role="status">
                Formulário validado! O cadastro estará disponível em breve.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}