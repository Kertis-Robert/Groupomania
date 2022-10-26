/** @format */

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateContext, AuthContext, DeleteContext } from "../../utils/context";
import { DivAvatar, Avatardiv, Avatarimg } from "../../utils/style/Grupomania";
import imgAvatar from "../../assets/profile.png";
import Settigpost from "../Update";

export default function Avatar({ name, userId, id }) {
	const DPostsCtx = useContext(DeleteContext);
	const PostsCTx = useContext(UpdateContext);
	const { idposts } = useContext(UpdateContext);
	const { usertoken } = useContext(AuthContext);
	const [btnDelete, setBtnDelete] = useState(false);
	const [btnUpdate, setBtnUpdate] = useState(false);
	const navigate = useNavigate();

	/// fetch de suppression du post//
	function fetchDelete() {
		fetch(`http://localhost:4000/api/posts/${idposts}`, {
			method: "DELETE",
			headers: {
				Authorization: `bearer ${usertoken}`,
			},
		})
			.then((res) => res.json())

			.then((data) => {
				DPostsCtx.setDposts(true);
			})
			.catch((err) => console.log(err));
		PostsCTx.setIdposts(null);
	}

	async function handleDelete(e) {
		e.preventDefault();
		PostsCTx.setIdposts(id);
		setBtnDelete(true);
	}
	async function handleSetting(e) {
		e.preventDefault();
		PostsCTx.setIdposts(id);
		setBtnUpdate(true);
	}
	useEffect(() => {
		if (idposts !== null && idposts === id && btnDelete) {
			fetchDelete();
			setBtnDelete(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [btnDelete]);

	useEffect(() => {
		if (PostsCTx.idposts !== null && btnUpdate) {
			navigate("/Update");
			setBtnUpdate(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [btnUpdate]);

	return (
		<DivAvatar>
			<Avatardiv>
				<Avatarimg src={imgAvatar} alt={name} />
				{name}
			</Avatardiv>
			<Settigpost
				user={userId}
				handleDelete={handleDelete}
				handleSetting={handleSetting}
			/>
		</DivAvatar>
	);
}
