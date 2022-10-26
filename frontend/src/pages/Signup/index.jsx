/** @format */

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context";
import {
	LogoImg,
	FormSingup,
	LabelEmail,
	BtnSubmit,
	DivLogin,
	MDivLogin,
	TDivLogin,
} from "../../utils/style/Grupomania";
import Logo from "../../assets/logo.svg";
import { ErrorMulti } from "../../components/Error";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Signup() {
	const AuthCtx = useContext(AuthContext);
	const [Error, setError] = useState(null);
	const { usertoken, setUsertoken } = useContext(AuthContext);
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	async function fetchSingup() {
		try {
			const response = await fetch("http://localhost:4000/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({ ...user }),
			});

			const data = response;
			if (data.status === 201) {
				fetchLogin();
			}
			if (data.status === 400) {
				setError("utilisateur enregistré");
			}
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		document.title = "Singup";
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
				setUsertoken(data.token);
				AuthCtx.setUserID(data.userId);
				localStorage.setItem("Roles", data.roles);
			})
			.catch((err) => console.log(err));
	}
	async function handleonChange(e) {
		e.preventDefault();

		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		AuthCtx.setName(user.email);
		fetchSingup();

		console.log(user);
	}

	useEffect(() => {
		usertoken ? localStorage.setItem("token", usertoken) : console.log("error");
		if (usertoken) {
			AuthCtx.setIslogged(true);
			//navigate("/posts");
		} else {
			AuthCtx.setIslogged(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [usertoken]);

	function HandlerError() {
		setError(null);
	}

	if (isMobile) {
		return (
			<div>
				<ErrorMulti mensaje={Error} HandlerError={HandlerError} />
				<MDivLogin>
					<FormSingup onSubmit={handleSubmit}>
						<LogoImg src={Logo} alt='logo' />
						<LabelEmail>
							Email
							<input
								type='email'
								name='email'
								placeholder='Email'
								required
								onChange={handleonChange}
							/>
						</LabelEmail>
						<br />
						<label>
							Password
							<input
								type='Password'
								name='password'
								placeholder='Password'
								required
								onChange={handleonChange}
							/>
						</label>
						<br />
						<BtnSubmit type='submit' value='Singup' />
						<p>
							{" "}
							Already have an account ? <Link to={"/login"}>Login</Link>
						</p>
					</FormSingup>
				</MDivLogin>
			</div>
		);
	}
	if (isTablet) {
		return (
			<div>
				<ErrorMulti mensaje={Error} HandlerError={HandlerError} />
				<TDivLogin>
					<FormSingup onSubmit={handleSubmit}>
						<LogoImg src={Logo} alt='logo' />
						<LabelEmail>
							Email
							<input
								type='email'
								name='email'
								placeholder='Email'
								required
								onChange={handleonChange}
							/>
						</LabelEmail>
						<br />
						<label>
							Password
							<input
								type='Password'
								name='password'
								placeholder='Password'
								required
								onChange={handleonChange}
							/>
						</label>
						<br />
						<BtnSubmit type='submit' value='Signup' />
						<p>
							{" "}
							Already have an account ? <Link to={"/login"}>Login</Link>
						</p>
					</FormSingup>
				</TDivLogin>
			</div>
		);
	}
	return (
		<div>
			<ErrorMulti mensaje={Error} HandlerError={HandlerError} />
			<DivLogin>
				<FormSingup onSubmit={handleSubmit}>
					<LogoImg src={Logo} alt='logo' />
					<LabelEmail>
						Email
						<input
							type='email'
							name='email'
							placeholder='Email'
							required
							onChange={handleonChange}
						/>
					</LabelEmail>
					<br />
					<label>
						Password
						<input
							type='Password'
							name='password'
							placeholder='Password'
							required
							onChange={handleonChange}
						/>
					</label>
					<br />
					<BtnSubmit type='submit' value='Signup' />
					<p>
							{" "}
							Already have an account ? <Link to={"/login"}>Login</Link>
						</p>
				</FormSingup>
			</DivLogin>
		</div>
	);
}

export default Signup;
