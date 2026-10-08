import { Categories } from "./components/Categories/Categories"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { useProduct } from "./hooks/useProduct"

function App() {
  const { products, loading, error } = useProduct();

  console.log({ products, loading, error });

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
      </main>
    </>
  )
}

export default App
