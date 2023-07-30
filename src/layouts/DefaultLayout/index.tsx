import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* O Outlet é um espeaço para ser inserido um conteúdo, o react vai saber onde posicionar um conteudo  */}
      <Outlet />
    </LayoutContainer>
  )
}
