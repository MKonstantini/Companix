import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import { patchLiked } from "../../services/dbFunctions";

interface LikeBtnProps {
    cardId: string
}

const LikeBtn: FunctionComponent<LikeBtnProps> = ({ cardId }) => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    return (
        <>
            {
                userInfo.likedCards.includes(cardId) ? (
                    // Filled Heart
                    <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {
                        userInfo.likedCards.splice(
                            userInfo.likedCards.indexOf(cardId), 1
                        )

                        sessionStorage.setItem("userInfo", JSON.stringify(userInfo))

                        patchLiked(userInfo.id, userInfo.likedCards)

                        setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string))
                    }}>
                        <i className="fa-solid fa-heart me-2"></i>
                        Like
                    </button>

                ) : (
                    // Empty Heart
                    <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {
                        userInfo.likedCards.push(cardId)

                        sessionStorage.setItem("userInfo", JSON.stringify(userInfo))

                        patchLiked(userInfo.id, userInfo.likedCards)

                        setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string))
                    }}>
                        <i className="fa-regular fa-heart me-2"></i>
                        Like
                    </button>
                )
            }
        </>
    );
}

export default LikeBtn;