/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import { AuthContext, LikedContext } from "../../utils/context";
import {
	DivcontainerLike,
	Btnlike,
	LikeLabel,
	DivQtalike,
} from "../../utils/style/Grupomania";

export default function Likes({ id, likes, usersLiked }) {
	const { setLikedposts } = useContext(LikedContext);
	const [isliked, setIsliked] = useState(false);
	const [like, setLike] = useState(0);
	const { usertoken, userID } = useContext(AuthContext);
	const userId = userID;
	///pour ajouter ou enlever des like///
	async function fetchlike() {
		fetch(`http://localhost:4000/api/posts/${id}/like`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",

				Authorization: `bearer ${usertoken}`,
			},
			body: JSON.stringify({
				like,
				userId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setLikedposts(true);
			})
			.catch((err) => console.log());
	}

	async function handleClick(e) {
		e.stopPropagation();
		e.preventDefault();
		if (like === 0) {
			setLike(1);
			fetchlike();
		}
		if (like === 1) {
			setLike(0);
			fetchlike();
		}
	}

	/// pour indiquer si l'utilisateur a déjà like///
	useEffect(() => {
		if (usersLiked.includes(userID)) {
			setIsliked(true);
			setLike(0);
		}
		if (!usersLiked.includes(userID)) {
			setIsliked(false);
			setLike(1);
		}
	}, [usersLiked, userID]);

	return (
		<DivcontainerLike>
			<LikeLabel hidden={isliked} onClick={handleClick}>
				<Btnlike type='button' name='notlike' aria-label='like' />
				<FontAwesomeIcon icon={heartRegular} />
			</LikeLabel>
			<LikeLabel hidden={!isliked} onClick={handleClick}>
				<Btnlike type='button' name='likes' aria-label='like' />
				<FontAwesomeIcon icon={heartSolid} />
			</LikeLabel>
			<DivQtalike>{likes}</DivQtalike>
		</DivcontainerLike>
	);
}
