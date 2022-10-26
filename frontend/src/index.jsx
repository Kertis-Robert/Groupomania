/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import Update from "./pages/Update";
import Mescomments from "./pages/Mescomments";
import Mesfavoris from "./pages/Mesfavoris";
import {
	AuthContextProvider,
	DeleteContextProvider,
	UpdateContextProvider,
	LikedContextProvider,
} from "./utils/context";
import { ErrorPage } from "./components/Error";
import Addpost from "./pages/Addpost";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthContextProvider>
				<UpdateContextProvider>
					<DeleteContextProvider>
						<LikedContextProvider>
							<GlobalStyle />
							<Header />

							<Routes>
								<Route path='/' element={<Login />} />
								<Route path='/login' element={<Login />} />
								<Route path='/Signup' element={<Signup />} />
								<Route path='/Addpost' element={<Addpost />} />
								<Route path='/Posts' element={<Posts />} />

								<Route path='/Update' element={<Update />} />
								<Route path='/Myfavorites' element={<Mesfavoris />} />
								<Route path='/Mycomments' element={<Mescomments />} />
								<Route path='*' element={<ErrorPage />} />
							</Routes>
						</LikedContextProvider>
					</DeleteContextProvider>
				</UpdateContextProvider>
			</AuthContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
