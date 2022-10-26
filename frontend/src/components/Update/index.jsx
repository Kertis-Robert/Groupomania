/** @format */

import { useMediaQuery } from "react-responsive";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
	DivBtnUpdate,
	BtnSettingDelete,
	LabelBtnsetting,
	MDivBtnUpdate,
} from "../../utils/style/Grupomania";

export default function Settigpost({ user, handleSetting, handleDelete }) {
	const { userID } = useContext(AuthContext);
	const [Roles , Setroles] = useState(localStorage.getItem("Roles"))
	const [roles, setRoles] = useState()
	const ismobile = useMediaQuery({ maxWidth: 767 });
	useEffect(() => {
		if (Roles === 'true') {
			setRoles(true)
		}
		if (!Roles === 'true') {
			setRoles(false)
		} 
		 
	 },[Roles])
	//function pour afficher les boutons de mise à jour et de suppression //
	if (user === userID || roles ) {
		return ismobile ? (
			<MDivBtnUpdate>
				<div>
					<LabelBtnsetting onClick={handleSetting} For='edit'>
						<BtnSettingDelete type='button' name='edit' aria-label="update de post"/>
						<FontAwesomeIcon icon={faGear} />
					</LabelBtnsetting>
				</div>
				<div>
					<LabelBtnsetting onClick={handleDelete} For='delete'>
						<BtnSettingDelete type='button' name='delete' aria-label="delete de post"/>
						<FontAwesomeIcon icon={faTrashCan} />
					</LabelBtnsetting>
				</div>
			</MDivBtnUpdate>
		) : (
			<DivBtnUpdate>
				<div>
					<LabelBtnsetting onClick={handleSetting} For='edit'>
						<BtnSettingDelete type='button' name='edit'  aria-label="update de post"/>
						<FontAwesomeIcon icon={faGear} />
					</LabelBtnsetting>
				</div>
				<div>
					<LabelBtnsetting onClick={handleDelete} For='delete'>
						<BtnSettingDelete type='button' name='delete' aria-label="delete de post" />
						<FontAwesomeIcon icon={faTrashCan} />
					</LabelBtnsetting>
				</div>
			</DivBtnUpdate>
		);
	}

	return null;
}
