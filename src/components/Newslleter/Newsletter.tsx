import { useEffect, useState, type FormEvent } from 'react';

import './Newsletter.scss';

export function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submissionCount, setSubmissionCount] = useState(0);
  const submitted = submissionCount > 0;
  const [accepted, setAccepted] = useState(false);
  const [isClosing, setIsClosing] = useState(false); 

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !accepted) {
      return;
    }

    setIsClosing(false)
    setSubmissionCount((count) => count + 1);
  }

  useEffect(() => {
    if (submissionCount === 0) return;

    const closeTimeout = setTimeout(() => {
      setIsClosing(true);
    }, 4000);

    const removeTimeout = setTimeout(() => {
      setSubmissionCount(0);
      setIsClosing(false);
    }, 4500);

    return () => {
      clearTimeout(closeTimeout);
      clearTimeout(removeTimeout);
    };
  }, [submissionCount]);

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

          <form className="newsletter__form" onSubmit={handleSubmit} aria-labelledby="newsletter-title">
            <div className="newsletter__fields">
              <label className="newsletter__field" htmlFor="newsletter-name">
                <span id="newsletter-name-label" hidden>Digite seu nome</span>
                <input
                  id="newsletter-name"
                  aria-labelledby="newsletter-name-label"
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => {
                    const value = event.target.value;
                    event.currentTarget.setCustomValidity(value && !value.trim() ? 'Digite seu nome; espaços em branco não são suficientes.' : '');
                    setName(value);
                  }}
                  required
                />
              </label>

              <label className="newsletter__field" htmlFor="newsletter-email">
                <span id="newsletter-email-label" hidden>Digite seu e-mail</span>
                <input
                  id="newsletter-email"
                  aria-labelledby="newsletter-email-label"
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
            <div role="status" aria-atomic="true">
              {submitted && (
              <p className={`newsletter__feedback ${ isClosing ? 'newsletter__feedback--closing' : ''}`}>
                Formulário validado! O cadastro estará disponível em breve.
              </p>
            )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
