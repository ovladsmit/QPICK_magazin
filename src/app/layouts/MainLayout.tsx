import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
export const MainLayout = () => {
  return (
    <div className={'page'}>
      <div className={"content"}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}