import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
