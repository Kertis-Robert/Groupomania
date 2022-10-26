/** @format */

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../utils/context";
import { useMediaQuery } from "react-responsive";
import {
	DivUpload,
	DivUploadimg,
	CommentsText,
	BtnUpload,
	FormUpload,
	BtnUploadImg,
	UploadLabel,
	UploaderImg,
	MDivUpload,
} from "../../utils/style/Grupomania";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function UploadImagUrl({ imagenUrl, handleUploadimg }) {
	if (imagenUrl) {
		return <UploaderImg src={imagenUrl} alt='gruopomania' />;
	} else {
		return (
			<UploadLabel aria-hidden='true'>
				<FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
				<span>Upload image</span>
				<BtnUploadImg
					required
					type='file'
					accept='image/*'
					name='imagen'
					onChange={handleUploadimg}
				/>
			</UploadLabel>
		);
	}
}

function Addpost() {
	const ismobile = useMediaQuery({ maxWidth: 767 });
	const { name, userID, usertoken, islogged } = useContext(AuthContext);
	const [postsed, setIsposted] = useState(false);
	const [imagenUrl, setImagenUrl] = useState(null);
	const [file, setFile] = useState();
	const [comments, setComments] = useState();
	const navigate = useNavigate();
	const formdata = new FormData();
	useEffect(() => {
		document.title = "Addposts";
	}, []);
	async function handleUploadimg(e) {
		setFile(e.target.files[0]);
	}
	useEffect(() => {
		if (file) {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onloadend = () => {
				setImagenUrl(fileReader.result);
			};
		}
	}, [file]);

	async function handleSubmit(e) {
		e.preventDefault();

		formdata.append("userId", userID);
		formdata.append("name", name);
		formdata.append("comments", comments);
		formdata.append("imageUrl", file);

		fetchnewposts();
	}
	async function fetchnewposts() {
		fetch("http://localhost:4000/api/posts", {
			method: "POST",
			headers: {
				Authorization: `bearer ${usertoken}`,
			},
			body: formdata,
		})
			.then((res) => res.json())

			.then((data) => {
				setIsposted(true);
			})
			.catch((err) => console.log(err));
		setFile(null);
	}

	useEffect(() => {
		if (postsed) {
			setFile(null);
			navigate("/Posts");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postsed, imagenUrl]);

	return ismobile ? (
		<MDivUpload>
			<FormUpload onSubmit={handleSubmit}>
				<DivUploadimg>
					<UploadImagUrl
						imagenUrl={imagenUrl}
						handleUploadimg={handleUploadimg}
						required
					/>
				</DivUploadimg>

				<CommentsText
					arial-hidden='true'
					id='commentpost'
					name='comments'
					required
					maxLength='35'
					placeholder='comments'
					onChange={(e) => setComments(e.target.value)}
				/>

				<BtnUpload type='submit' value='Post' />
			</FormUpload>
		</MDivUpload>
	) : (
		<DivUpload>
			<FormUpload onSubmit={handleSubmit}>
				<DivUploadimg>
					<UploadImagUrl
						imagenUrl={imagenUrl}
						handleUploadimg={handleUploadimg}
						required
					/>
				</DivUploadimg>
				<label htmlFor='commentpost'>
					comments
					<CommentsText
						id='commentpost'
						name='comments'
						required
						maxLength='35'
						placeholder='comments'
						onChange={(e) => setComments(e.target.value)}
					/>
				</label>
				<BtnUpload type='submit' value='Post' />
			</FormUpload>
		</DivUpload>
	);
}

export default Addpost;
