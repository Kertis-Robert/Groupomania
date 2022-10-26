/** @format */

import { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate, Link } from "react-router-dom";
import {
	LogoImg,
	FormLogin,
	LabelEmail,
	DivLogin,
	BtnSubmit,
	MDivLogin,
	TDivLogin,
	StyledLinksignup,
} from "../../utils/style/Grupomania";
import Logo from "../../assets/logo.svg";
import { AuthContext } from "../../utils/context";
import { ErrorMulti } from "../../components/Error";
function Login() {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	const [Error, setError] = useState(null);
	const AuthCtx = useContext(AuthContext);
	const {setRoles, Roles } = useContext(AuthContext);
	let [jwt, setJwt] = useState();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();
	useEffect(() => {
		document.title = "Login";
	}, []);
	async function fetchLogin() {
		fetch("http://localhost:4000/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ ...user }),
		})
			.then((res) => res.json())
			.then((data) => {
				setJwt(data.token);
				AuthCtx.setUserID(data.userId);
				localStorage.setItem("Roles", data.roles);
				setError(data.error);
			})
			.catch((err) => console.log(err));
	}

	function handleonChange(e) {
		e.preventDefault();

		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	}
	async function handleSubmit(e) {
		e.preventDefault();
		fetchLogin();
		
	}

	useEffect(() => {
		if (jwt) {
			localStorage.setItem("token", jwt);
			AuthCtx.setUsertoken(localStorage.getItem("token", jwt));
			AuthCtx.setIslogged(true);
			AuthCtx.setName(user.email);
			
		}
		if (jwt) {
			navigate("/posts");
		
		}
		if (!jwt) {
			AuthCtx.setIslogged(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [jwt]);
	function HandlerError() {
		setError(null);
	}

	if (isMobile) {
		return (
			<div>
				<ErrorMulti mensaje={Error} HandlerError={HandlerError} />
				<MDivLogin>
					<FormLogin onSubmit={handleSubmit}>
						<LogoImg src={Logo} alt='logo' />

						<LabelEmail>
							Email
							<input
								type='email'
								name='email'
								onChange={handleonChange}
								placeholder='Email'
								required
							/>
						</LabelEmail>
						<br />
						<label>
							Password
							<input
								type='Password'
								name='password'
								onChange={handleonChange}
								placeholder='Password'
								required
							/>
						</label>
						<br />

						<BtnSubmit type='submit' value='Login' />
						<p>
							{" "}
							Don't have an account yet ? <Link to={"/singup"}>Singup</Link>
						</p>
					</FormLogin>
				</MDivLogin>
			</div>
		);
	}
	if (isTablet) {
		return (
			<div>
				<ErrorMulti mensaje={Error} HandlerError={HandlerError} />
				<TDivLogin>
					<FormLogin onSubmit={handleSubmit}>
						<LogoImg src={Logo} alt='logo' />

						<LabelEmail>
							Email
							<input
								type='email'
								name='email'
								onChange={handleonChange}
								placeholder='Email'
								required
							/>
						</LabelEmail>
						<br />
						<label>
							Password
							<input
								type='Password'
								name='password'
								onChange={handleonChange}
								placeholder='Password'
								required
							/>
						</label>
						<br />

						<BtnSubmit type='submit' value='Login' />
						<p>
							{" "}
							Don't have an account yet ? <Link to={"/singup"}>Singup</Link>
						</p>
					</FormLogin>
				</TDivLogin>
			</div>
		);
	}
	return (
		<div>
			<ErrorMulti mensaje={Error} HandlerError={HandlerError} />
			<DivLogin>
				<FormLogin onSubmit={handleSubmit}>
					<LogoImg src={Logo} alt='logo' />

					<LabelEmail>
						Email
						<input
							type='email'
							name='email'
							onChange={handleonChange}
							placeholder='Email'
							required
						/>
					</LabelEmail>
					<br />
					<label>
						Password
						<input
							type='Password'
							name='password'
							onChange={handleonChange}
							placeholder='Password'
							required
						/>
					</label>
					<br />

					<BtnSubmit type='submit' value='Login' />
					<p>
					Don't have an account yet ?{" "}
						<StyledLinksignup to={"/Signup"}>Signup</StyledLinksignup>
					</p>
				</FormLogin>
			</DivLogin>
		</div>
	);
}

export default Login;
