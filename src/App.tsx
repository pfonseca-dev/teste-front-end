import { Categories } from "./components/Categories/Categories"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"

function App() {

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
