/** @format */

import styled from "styled-components";
import colors from "./colors";
import { Link } from "react-router-dom";

/////// styled Component Singup and Login ////

export const FormLogin = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
	width: 300px;
	height: 300px;
	transition: 200ms;
	}
`;

export const LogoImg = styled.img`
	padding-bottom: 5px;
	height: 150px;
	width: 150px;
	align-self: center;
	border-radius: 30%;
`;
export const FormSingup = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
	border-radius: 30px;
	width: 300px;
	height: 300px;
	transition: 200ms;
	}
`;
export const LabelEmail = styled.label`
	font-size: 18px;
	transform: translate(6%, 10%);
`;
export const DivLogin = styled.div`
	position: absolute;
	margin: 0;
	left: 50%;
	top: 30%;
	transform: translate(-50%, -50%);
`;
export const BtnSubmit = styled.input`
	cursor: pointer;
	align-self: center;
	width: 35%;
	height: 25px;
	background-color: white;
	border-radius: 20px/20px;
`;
export const MDivLogin = styled.div`
	position: absolute;
	margin: 0;
	left: 50%;
	top: 30%;
	transform: translate(-50%, -50%);
`;
export const TDivLogin = styled.div`
	position: absolute;
	margin: 0;
	left: 50%;
	top: 30%;
	transform: translate(-50%, -50%);
`;
////////  styled Componet Dashboard       ///////
export const DivBtn = styled.div`
	padding: 10px;
	text-align: center;
	width: 100px;
`;
export const DivBtnOpt = styled.div`
	width: 100px;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	color: white;

	padding: 10px;
	text-align: center;
`;
export const DivContainer = styled.div`
	width: 80px;
	display: flex;
	flex-direction: column;
`;
export const BtnDashboard = styled.input`
	width: 120px;
	margin-left: -10px;
	background: none;
	outline: none;
	border: none;
	font-weight: 600;
	cursor: pointer;
	text-align: center;
	color: #444cef;
	&:hover {
		color: #444cef;
	}
`;
//// style Component Header///
export const Banner = styled.div`
	height: 60px;
	padding: 8px;
	border-bottom: solid 20px ${colors.primary};
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	align-items: center;
`;
export const NavLink = styled.nav`
	width: 250px;
	display: flex;
	justify-content: space-evenly;
`;
export const ImgLogo = styled.img`
	width: 35%;
	margin-left: -15%;
	position: relative;
	bottom: 120%;
	z-index: -1;
`;
export const StyleLogo = styled(Link)`
	padding-left: 40px;
	margin-top: 0;
	text-align: left;
	width: 50%;
`;
export const StyledLink = styled(Link)`
	position: relative;
	padding: 8px;
	color: ${colors.primary};
	text-decoration: none;
	font-size: 18px;
	${(props) =>
		props.$isFullLink &&
		`color: blue; border-radius: 30px;`}
`;
export const StyledLinksignup = styled(Link)`
	padding: 6px;
	color: blue;
	text-decoration: none;
	font-size: 14px;
	border-radius: 30px;
`;

export const MBanner = styled.div`
	height: 60px;
	padding: 8px;
	border-bottom: solid 15px ${colors.primary};
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	align-items: center;
`;
export const MNavLink = styled.nav`
	width: 250px;
	display: flex;
	justify-content: space-evenly;
`;
export const MImgLogo = styled.img`
	width: 100%;
	position: relative;
	bottom: 50%;
	z-index: -1;
`;
export const MStyleLogo = styled(Link)`
	margin-top: 20px;
	text-align: left;
	width: 200px;
`;
export const MStyledLink = styled(Link)`
	position: relative;
	margin-top: 15px;
	left: 5%;
	padding: 6px;
	color: ${colors.primary};
	text-decoration: none;
	font-size: 14px;
	${(props) =>
		props.$isFullLink &&
		`color: blue; border-radius: 30px; background-color: ${colors.secondary};`}
`;

/// style Component Avatar ///
export const DivAvatar = styled.div`
	width: 100%;
	border-bottom: 1.5px solid;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Avatardiv = styled.div`
	display: flex;
	align-items: center;
	border-color: ${colors.tertiaire};
	padding-bottom: 0.5rem;
`;

export const Avatarimg = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	padding-right: 0.5rem;
	background-position: 50%;
	border-radius: 9999px;
	background-size: cover;
`;
/// style Componet Update ///
export const MDivBtnUpdate = styled.div`
	width: 15%;
	display: flex;
	justify-content: space-between;
`;
export const DivBtnUpdate = styled.div`
	width: 10%;
	display: flex;
	justify-content: space-between;
`;
export const BtnSettingDelete = styled.input`
	display: none;
`;
export const LabelBtnsetting = styled.form`
	cursor: pointer;
`;

/// style Component Addposts and Update Pages ///
export const DivUpload = styled.div`
	width: 350px;
	max-width: 30rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10rem;
`;
export const MDivUpload = styled.div`
	width: 350px;
	max-width: 30rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10rem;
	position: relative;
	left: 10px;
`;
export const DivUploadimg = styled.div`
	width: 100%;

	border: 5px;
	padding: 0.5rem 0.75rem;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	height: 16rem;
`;
export const CommentsText = styled.textarea`
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	border-width: 1px;
	border-radius: 0.25rem;
	width: 100%;
	padding: 0.5rem 0.75rem;
	color: #606f7b;
	line-height: 1.25;
	height: 6rem;
	resize: none;
`;
export const BtnUpload = styled.input`
	cursor: pointer;
	margin-top: 0.5rem;
	font-size: 1.25rem;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	display: block;
	margin-left: auto;
	margin-right: auto;
	background-color: ${colors.primary};
	color: #fff;
	font-weight: 700;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
`;
export const FormUpload = styled.form`
	margin: 0;
	padding: 0;

	width: 300px;
`;

export const TitleCmments = styled.textarea`
	margin-top: 0.5rem;
	border-width: 1px;
	border-radius: 0.25rem;
	width: 100%;
	padding: 0.5rem 0.75rem;
	color: #606f7b;
	line-height: 0.8;
	height: 0.9rem;
	resize: none;
`;
export const BtnUploadImg = styled.input`
	display: none;
`;

export const UploadLabel = styled.label`
	width: 16rem;
	position: relative;
	top: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem 1rem;
	background-color: #fff;
	color: blue;
	border-radius: 0.5rem;
	box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
		0 5px 15px 0 rgba(0, 0, 0, 0.08);
	letter-spacing: 0.05em;
	text-transform: uppercase;
	border-width: 1px;
	border-color: #3490dc;
	cursor: pointer;
`;

export const UploaderImg = styled.img`
	width: 100%;
	height: 90%;
`;
export const UpdateloaderImg = styled.img`
	width: 40%;
	height: 30%;
	position: relative;
	z-index: 1;
	object-fit: contain;
`;
//style Component Posts pages///

export const DivPostpage = styled.div`
	width: 100%;
`;

export const DivContainerPost = styled.div`
	width: 100%;
	display: flex;
`;
export const DivPost = styled.div`
	margin-top: 20px;
	position: relative;
	left: 30%;
	transform: translate(-30%);
`;

export const DivBtnPost = styled.div`
	display: none;
	width: 95%;
	text-align: center;
	margin-top: 30px;
`;
export const BtnInput = styled.input`
	margin: 5px;
	cursor: pointer;
	font-size: 1rem;
	color: blue;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
`;

export const MDivPostpage = styled.div`
	width: 100%;
`;

export const MDivContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const MDivPost = styled.div`
	margin-top: 20px;
`;
export const TDivContainerPost = styled.div`
	width: 80%;
	display: flex;
`;

/// styled Component Posts///

export const DivPosted = styled.div`
	margin-top: 20px;
	width: 300px;
	position: relative;
	left: -10%;
`;
export const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 1rem;
	background-color: #e2e3e9;
	border-radius: 30px;
	width: 500px;
	height: 250px;
	transition: 200ms;
	&:hover {
		cursor: pointer;
	}
`;
export const PostImage = styled.img`
	height: 120px;
	width: 150px;
	object-fit: contain;
	padding-top: 1rem;
`;
export const PostTitle = styled.span`
	color: black;
	font-size: 18px;
	font-weight: normal;
	align-self: center;
	position: relative;
	top: -30%;
	left: 10%;
`;
export const TimeAGostyled = styled.div`
	width: 150px;
	position: relative;
	left: 75%;
`;

export const MDivPosted = styled.div`
	position: relative;
	left: 50%;
	transform: translate(-40%);
`;

export const MPostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: #e2e3e9;
	border-radius: 30px;
	margin-bottom: 15px;
	width: 300px;
	height: 200px;
	transition: 200ms;
	&:hover {
		cursor: pointer;
	}
`;
export const MPostImage = styled.img`
	height: 100px;
	width: 100px;
	object-fit: contain;
	padding-top: 0.5rem;
`;
export const MPostTitle = styled.span`
	color: black;
	font-size: 16px;
	font-weight: normal;
	align-self: center;
	position: relative;
	top: -30%;
	left: 15%;
`;
export const MTimeAGostyled = styled.div`
	width: 150px;
	position: relative;
	left: 65%;
	margin-top: -10px;
`;

//// styled Components Like///
export const DivcontainerLike = styled.div`
	display: flex;
	position: relative;
	top: 9%;
	margin-left: 5px;
`;

export const Btnlike = styled.input`
	display: none;
`;
export const LikeLabel = styled.form`
	width: 15px;
	color: ${colors.primary};
	cursor: pointer;
	padding-right: 5px;
`;
export const DivQtalike = styled.div`
	width: 20px;
`;

export const DivLoder = styled.div`
	maring: 0;
	padding: 0;
	width: 100%;
	position: absolute;
	left: 40%;
	top: 30%;
`;
/// style components Error ////
export const ErrorContainer = styled.div`
	border-width: 1px;
	position: relative;
	left: 42%;
	z-index: 50;
	background-color: #fcebea;
	border-color: #ef5753;
	margin-top: 2rem;
	width: 200px;
	color: #cc1f1a;
	border-radius: 0.25rem;
`;
export const DivError = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	width: 100%;
	max-width: ;
	margin-right: auto;
	left: 50%;
`;

export const BtnError = styled.button`
	background: none;
	border: none;
	display: flex;
	margin-left: auto;
	padding-left: 1rem;
	padding-right: 1rem;
`;
export const Spanerror = styled.span`
	dispaly: block;
`;
export const MErrorContainer = styled.div`
	border-width: 1px;
	position: relative;
	left: 25%;
	z-index: 50;
	background-color: #fcebea;
	border-color: #ef5753;
	width: 200px;
	color: #cc1f1a;
	border-radius: 0.25rem;
`;
export const TErrorContainer = styled.div`
	border-width: 1px;
	position: relative;
	left: 38%;
	top: -55px;
	z-index: 50;
	background-color: #fcebea;
	border-color: #ef5753;
	margin-top: 4rem;
	width: 200px;
	color: #cc1f1a;
	border-radius: 0.25rem;
`;
export const ErrorPages = styled.div`
	border-width: 1px;
	text-align: center;
	position: relative;
	z-index: 50;
	background-color: #fcebea;
	border-color: #ef5753;
	margin-top: 2rem;
	width: 100%;
	color: #cc1f1a;
	border-radius: 0.25rem;
`;

//// style componets Emptydata ///
export const DivEmtydata = styled.div`
	border-width: 1px;
	text-align: center;
	position: relative;
	left: 15%;
	z-index: 50;
	border-color: #ef5753;
	margin-top: 1rem;
	width: 50%;
	color: ${colors.primary};
	border-radius: 0.25rem;
`;
export const MDivEmtydata = styled.div`
	border-width: 1px;
	text-align: center;
	position: relative;
	left: 15%;
	z-index: 50;
	background-color: ${colors.secondary};
	border-color: #ef5753;
	margin-top: 5rem;
	width: 70%;
	color: #cc1f1a;
	border-radius: 0.25rem;
`;
