import { Categories } from "./components/Categories/Categories"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { useProduct } from "./hooks/useProduct"
import { ProductShowcase } from "./components/ProductShowcase/ProductShowcase"
import { PartnerBanner } from "./components/PartnerBanners/PartnerBanners"
import { Brands } from "./components/Brands/Brands"
import { Newsletter } from "./components/Newslleter/Newsletter"
import { Footer } from "./components/Footer/Footer"

function App() {
  const { products, loading, error } = useProduct();

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <ProductShowcase id="products" products={products} loading={loading} error={error}/>
        <PartnerBanner />
        <ProductShowcase showCategories= {false} products={products} loading={loading} error={error}/>
        <PartnerBanner />
        <Brands />
        <ProductShowcase showCategories= {false} products={products} loading={loading} error={error}/>
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
