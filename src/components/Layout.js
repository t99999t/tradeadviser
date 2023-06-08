import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from'react-bootstrap/Container'
function Layout() {
    return (
            
                <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>               <Header/>
                <main>
                <Container>
                    <Outlet /></Container>
                </main>
                
                 <Footer />

                 
            </ThemeProvider>
            
    )
}

export default Layout
