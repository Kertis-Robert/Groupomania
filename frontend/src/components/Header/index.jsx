/** @format */

import { useContext } from "react";
import { AuthContext } from "../../utils/context";
import Logo from "../../assets/logo1.png";
import {
	Banner,
	NavLink,
	ImgLogo,
	StyleLogo,
	StyledLink,
	MBanner,
	MNavLink,
	MImgLogo,
	MStyleLogo,
	MStyledLink,
} from "../../utils/style/Grupomania";
import { useMediaQuery } from "react-responsive";

function Header() {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isTablet = useMediaQuery({ manWidth: 768, maxWidth: 991 });

	const { islogged } = useContext(AuthContext);
	const AuthCtx = useContext(AuthContext);

	async function logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("userID");
		localStorage.removeItem("Roles");
		localStorage.removeItem("Name");
		localStorage.removeItem("idpots");
		AuthCtx.setUsertoken("");
		AuthCtx.setIslogged(false);
		AuthCtx.setuserId("");
		AuthCtx.setRoles("");
	}

	if (isMobile || isTablet) {
		return (
			<MBanner>
				<MStyleLogo to='/posts'>
					<MImgLogo src={Logo} alt='groupmania' />
				</MStyleLogo>
				<MNavLink>
					<MStyledLink hidden={islogged} to='/Signup' $isFullLink>
						Signup
					</MStyledLink>
					<MStyledLink hidden={islogged} to='/Login' $isFullLink>
						Login
					</MStyledLink>
					<MStyledLink hidden={!islogged} to='/Addpost' $isFullLink>
						New Post
					</MStyledLink>
					<MStyledLink onClick={logout} hidden={!islogged} to='/' $isFullLink>
						Logout
					</MStyledLink>
				</MNavLink>
			</MBanner>
		);
	}

	return (
		<Banner>
			<StyleLogo to='/posts'>
				<ImgLogo src={Logo} alt='groupmania' />
			</StyleLogo>
			<NavLink>
				<StyledLink hidden={islogged} to='/Signup' $isFullLink>
					Signup
				</StyledLink>
				<StyledLink hidden={islogged} to='/Login' $isFullLink>
					Login
				</StyledLink>
				<StyledLink hidden={!islogged} to='/Addpost' $isFullLink>
					New Post
				</StyledLink>
				<StyledLink onClick={logout} hidden={!islogged} to='/' $isFullLink>
					Logout
				</StyledLink>
			</NavLink>
		</Banner>
	);
}

export default Header;
