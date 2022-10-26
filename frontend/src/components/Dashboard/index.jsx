import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../utils/context'
import { useNavigate } from 'react-router-dom'
import {
    DivContainer,
    DivBtnOpt,
    DivBtn,
    BtnDashboard,
} from '../../utils/style/Grupomania'

function Dashboard() {
    const [isopen, setIsopen] = useState(false)
    const { islogged } = useContext(AuthContext)
    const navigate = useNavigate()

    async function handlecomments(e) {
        e.preventDefault()
        navigate('/Mycomments')
    }
    async function handleFavorites(e) {
        e.preventDefault()
        navigate('/Myfavorites')
    }

    return (
        <DivContainer>
            <DivBtn>
                <BtnDashboard
                    type="button"
                    name="Dashboard"
                    value="Dashboard"
                    hidden={!islogged}
                    onClick={() => setIsopen(true)}
                />
            </DivBtn>
            <div hidden={!isopen}>
                <DivBtnOpt>
                    <BtnDashboard
                        type="button"
                        name="comentarios"
                        onClick={handlecomments}
                        value="Mes comments"
                    />
                    <BtnDashboard
                        type="button"
                        name="favoritos"
                        onClick={handleFavorites}
                        value="Mes favoris"
                    />
                    <BtnDashboard
                        type="button"
                        name="ferme"
                        onClick={() => setIsopen(false)}
                        value="Fermer"
                    />
                </DivBtnOpt>
            </div>
        </DivContainer>
    )
}

export default Dashboard
