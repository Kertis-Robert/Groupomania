import { createGlobalStyle } from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const Table = createGlobalStyle`
* {
    font-family: Lato;
} 
body{
    margin: auto;
    min-width:768px;
    max-width: 991px;
    
}
`

const Mobile = createGlobalStyle`
* {
    font-family: Lato;
} 
body{
    margin: auto;
    max-width: 767px;
   
}`

const StyledGlobalStyle = createGlobalStyle`
* {
    font-family: Lato;
} 
body{
    margin: auto;
    max-width: 1250px;
    heigth:auto;
}`

function GlobalStyle() {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    if (isMobile) {
        return <Mobile />
    }
    if (isTablet) {
        ;<Table />
    }
    return <StyledGlobalStyle />
}
export default GlobalStyle
