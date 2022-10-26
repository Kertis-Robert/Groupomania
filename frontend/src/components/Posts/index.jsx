/** @format */

import PropTypes from "prop-types";
import Avatar from "../Avatar";
import Like from "../Like";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import { useMediaQuery } from "react-responsive";
import {
	DivPosted,
	PostWrapper,
	PostImage,
	PostTitle,
	TimeAGostyled,
	MDivPosted,
	MPostWrapper,
	MPostImage,
	MPostTitle,
	MTimeAGostyled,
} from "../../utils/style/Grupomania";

timeago.register("fr", fr);

function Listposts({
	id,
	comments,
	userId,
	imagen,
	name,
	likes,
	usersLiked,
	created_at,
}) {
	const ismobile = useMediaQuery({ maxWidth: 767 });

	if (ismobile) {
		return (
			<MDivPosted>
				<MPostWrapper>
					<Avatar name={name} userId={userId} id={id} />
					<MPostImage src={imagen} alt='groupmania' />
					<MPostTitle>#{comments}</MPostTitle>
					<Like id={id} likes={likes} usersLiked={usersLiked} />
					<MTimeAGostyled>
						<TimeAgo datetime={created_at} locale={"fr"} />
					</MTimeAGostyled>
				</MPostWrapper>
			</MDivPosted>
		);
	}

	return (
		<DivPosted>
			<PostWrapper>
				<Avatar name={name} userId={userId} id={id} />
				<PostImage src={imagen} alt='groupmania' />
				<PostTitle>#{comments}</PostTitle>
				<Like id={id} likes={likes} usersLiked={usersLiked} />
				<TimeAGostyled>
					<TimeAgo datetime={created_at} locale={"fr"} />
				</TimeAGostyled>
			</PostWrapper>
		</DivPosted>
	);
}
Listposts.propTypes = {
	id: PropTypes.string.isRequired,
	comments: PropTypes.string.isRequired,
	imagen: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	usersLiked: PropTypes.array.isRequired,
	created_at: PropTypes.string.isRequired,
};

Listposts.defaultProps = {
	id: "",
	comments: "",
	imagen: "",
	userId: "",
	name: "",
	likes: "",
	usersLiked: "",
	created_at: "",
};

export default Listposts;
