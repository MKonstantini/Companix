import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";

interface LikeBtnProps {
    cardId: string
}

const LikeBtn: FunctionComponent<LikeBtnProps> = ({ cardId }) => {
    const [userInfo, setUserInfo] = useContext(UserContext)


    return (
        <>
            {
                userInfo.likedCards.includes(cardId) ? (
                    <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {
                        // Patch in DB
                        // DB to SessionStorage
                        // SessionStorage to userInfo (setUserInfo)
                    }}>
                        <i className="fa-solid fa-heart me-2"></i>
                        Like
                    </button>

                ) : (
                    <button className="btn btn-outline-secondary rounded-5 me-2">
                        <i className="fa-regular fa-heart me-2"></i>
                        Like
                    </button>
                )
            }
        </>
    );
}

export default LikeBtn;