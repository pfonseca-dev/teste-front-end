import "./Header.scss"

import { MainHeader } from "./MainHearder"
import { TopBar } from "./TopBar"
import { Navigation } from "./Navigation"

export function Header() {
  return (
    <header className="header">
      <TopBar />
      <MainHeader />
      <Navigation />
    </header>
  )
}