import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import {
    ErrorPages,
    ErrorContainer,
    DivError,
    BtnError,
    Spanerror,
    MErrorContainer,
    TErrorContainer,
    DivEmtydata,
    StyledLink,
    MDivEmtydata,
} from '../../utils/style/Grupomania'
import '../../utils/style/Error.css'

export function ErrorPage() {
    return (
        <ErrorPages>
            <h1> 404 Not found...</h1>
            <Link to="/">Home</Link>
        </ErrorPages>
    )
}
// function de erros en la page login et singup////
export function ErrorMulti({ mensaje, HandlerError }) {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    if (!mensaje) {
        return null
    }
    if (isMobile) {
        return (
            <MErrorContainer role="alert">
                <DivError>
                    <Spanerror>{mensaje}</Spanerror>
                    <BtnError className="error__icon" onClick={HandlerError}>
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            className="Error__icon"
                        />
                    </BtnError>
                </DivError>
            </MErrorContainer>
        )
    }
    if (isTablet) {
        return (
            <TErrorContainer role="alert">
                <DivError>
                    <Spanerror>{mensaje}</Spanerror>
                    <BtnError className="error__icon" onClick={HandlerError}>
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            className="Error__icon"
                        />
                    </BtnError>
                </DivError>
            </TErrorContainer>
        )
    }
    return (
        <ErrorContainer role="alert">
            <DivError>
                <Spanerror>{mensaje}</Spanerror>
                <BtnError className="error__icon" onClick={HandlerError}>
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="Error__icon"
                    />
                </BtnError>
            </DivError>
        </ErrorContainer>
    )
}
//// function quand il n'y a pas de posts/////
export function EmptyData({ datapage }) {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    if (datapage.length !== 0) {
        return null
    }

    if (isMobile || isTablet) {
        return (
            <MDivEmtydata>
                <h1>Il n'y a pas de message</h1>
                <StyledLink to="/Addpost">créer le votre !</StyledLink>
            </MDivEmtydata>
        )
    }

    return (
        <DivEmtydata>
            <h1>Il n'y a pas de message</h1>
            <StyledLink to="/Addpost">créer le votre !</StyledLink>
        </DivEmtydata>
    )
}
//// function quand il n'y a pas de likes (mesfavoris)/////
export function Emptylike({ datapage }) {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    if (datapage.length !== 0) {
        return null
    }
    if (isMobile || isTablet) {
        return (
            <MDivEmtydata>
                <h1>Vous n'avez pas encore des favoris</h1>
                <StyledLink to="/posts">Posts</StyledLink>
            </MDivEmtydata>
        )
    }
    return (
        <DivEmtydata>
            <h1>Vous n'avez pas encore des favoris </h1>
            <StyledLink to="/posts">Posts</StyledLink>
        </DivEmtydata>
    )
}
