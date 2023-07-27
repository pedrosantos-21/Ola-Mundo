import Banner from 'componentes/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
  return (
    <main>
        <Banner/>

        <Outlet/>
        {/* Renderizar conteúdo da rota aqui... */}
    </main>
  )
}
