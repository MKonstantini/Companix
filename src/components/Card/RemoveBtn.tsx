import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import { patchSaved } from "../../services/dbFunctions";

interface LikeBtnProps {
    cardId: string
}

const LikeBtn: FunctionComponent<LikeBtnProps> = ({ cardId }) => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    return (
        <>
            {
                <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {
                    userInfo.savedCards.splice(
                        userInfo.savedCards.indexOf(cardId), 1
                    )

                    sessionStorage.setItem("userInfo", JSON.stringify(userInfo))

                    patchSaved(userInfo.id, userInfo.savedCards)

                    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string))
                }}>
                    <i className="fa-solid fa-x me-2"></i>
                    Remove
                </button>
            }
        </>
    );
}

export default LikeBtn;