import './Hero.scss'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content container">
        <h1 className="hero__title">Venha conhecer nossas promoções</h1>
        <p className="hero__discount"><strong>50% Off</strong> nos produtos</p>
        <a href="#products" className="hero__button">Ver produto</a>
      </div>
    </section>
  )
}