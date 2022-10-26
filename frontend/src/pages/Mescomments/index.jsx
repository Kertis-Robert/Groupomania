import { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { AuthContext, DeleteContext, LikedContext } from '../../utils/context'
import { useNavigate } from 'react-router-dom'
import {
    DivPostpage,
    DivContainerPost,
    DivPost,
    DivBtnPost,
    BtnInput,
    MDivContainer,
    MDivPost,
    MDivPostpage,
    TDivContainerPost,
    DivLoder,
} from '../../utils/style/Grupomania'
import Posts from '../../components/Posts'
import Dashboard from '../../components/Dashboard'
import { Loader } from '../../components/Loading/index'
import { EmptyData } from '../../components/Error'
function Mycomments() {
    const navigate = useNavigate()
    const { usertoken, userID, islogged } = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    const [postsACT, setPostsAct] = useState(false)
    const { setDposts, Dposts } = useContext(DeleteContext)
    const { setLikedposts, likedposts } = useContext(LikedContext)
    const [next, setNext] = useState(posts.slice(0, 3))
    const [currentPosts, setCurrentPosts] = useState(0)
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const [isloading, setIsloading] = useState(false)
    const [empty, setEmpty] = useState(false)
    useEffect(() => {
		document.title = 'Mes comments'
	},[])

    async function fetchposts() {
        await fetch('http://localhost:4000/api/posts', {
            headers: new Headers({
                Authorization: `bearer ${usertoken}`,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
               
                setPosts(data)
            })

            .catch((error) => console.log(error))
        setPostsAct(true)
        setIsloading(false)
    }
    
    
    useEffect(() => {
        setIsloading(true)
       
         islogged ? fetchposts() : navigate('/')
        

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [islogged])

    useEffect(() => {
        
        if (postsACT) {
            setNext(
                posts
                    .filter((post) => post.userId === userID)
                    .slice(currentPosts, currentPosts + 3)
            )
            setPostsAct(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postsACT])

    async function handleClickPlus(e) {
        e.preventDefault()
        if (
            posts.filter((post) => post.userId === userID).length >
            currentPosts + 3
        ) {
            setCurrentPosts(currentPosts + 3)
        }

        setPostsAct(true)
    }
    async function handleClickMois(e) {
        e.preventDefault()
        if (currentPosts > 0) {
            setCurrentPosts(currentPosts - 3)
            setPostsAct(true)
        }
    }

    useEffect(() => {
        if (likedposts) {
            fetchposts()
            setLikedposts(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [likedposts])
    useEffect(() => {
        if (Dposts) {
            fetchposts()
            setDposts(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Dposts])

    useEffect(() => {
        next.length === 0 ? setEmpty(true) : setEmpty(false)
    }, [next])

    if (isMobile) {
        return isloading ? (
            <DivLoder>
                <Loader />
            </DivLoder>
        ) : (
            <MDivPostpage>
                <MDivContainer>
                    <div>
                        <Dashboard />
                    </div>
                    <EmptyData datapage={next} />
                    <MDivPost>
                        {next.map((post) => (
                            <Posts
                                key={post._id}
                                id={post._id}
                                comments={post.comments}
                                title={post.title}
                                imagen={post.imageUrl}
                                name={post.name}
                                userId={post.userId}
                                likes={post.likes}
                                usersLiked={post.usersLiked}
                                created_at={post.created_at}
                            />
                        ))}
                    </MDivPost>
                </MDivContainer>
                <DivBtnPost>
                    <BtnInput
                        hidden={empty}
                        type="button"
                        value="Preview"
                        onClick={handleClickMois}
                    />
                    <BtnInput
                        hidden={empty}
                        type="button"
                        value="Next"
                        onClick={handleClickPlus}
                    />
                </DivBtnPost>
            </MDivPostpage>
        )
    }
    if (isTablet) {
        return isloading ? (
            <DivLoder>
                <Loader />
            </DivLoder>
        ) : (
            <DivPostpage>
                <TDivContainerPost>
                    <div>
                        <Dashboard />
                    </div>
                    <EmptyData datapage={next} />
                    <DivPost>
                        {next.map((post) => (
                            <Posts
                                key={post._id}
                                id={post._id}
                                comments={post.comments}
                                title={post.title}
                                imagen={post.imageUrl}
                                name={post.name}
                                userId={post.userId}
                                likes={post.likes}
                                usersLiked={post.usersLiked}
                                created_at={post.created_at}
                            />
                        ))}
                    </DivPost>
                </TDivContainerPost>
                <DivBtnPost>
                    <BtnInput
                        hidden={empty}
                        type="button"
                        value="Preview"
                        onClick={handleClickMois}
                    />
                    <BtnInput
                        hidden={empty}
                        type="button"
                        value="Next"
                        onClick={handleClickPlus}
                    />
                </DivBtnPost>
            </DivPostpage>
        )
    }

    return isloading ? (
        <DivLoder>
            <Loader />
        </DivLoder>
    ) : (
        <div>
            <DivPostpage>
                <DivContainerPost>
                    <div>
                        <Dashboard />
                    </div>
                    <EmptyData datapage={next} />
                    <DivPost>
                        {next.map((post) => (
                            <Posts
                                key={post._id}
                                id={post._id}
                                comments={post.comments}
                                title={post.title}
                                imagen={post.imageUrl}
                                name={post.name}
                                userId={post.userId}
                                likes={post.likes}
                                usersLiked={post.usersLiked}
                                created_at={post.created_at}
                            />
                        ))}
                    </DivPost>
                </DivContainerPost>
                <DivBtnPost>
                    <BtnInput
                        hidden={empty}
                        type="button"
                        value="Preview"
                        onClick={handleClickMois}
                    />
                    <BtnInput
                        hidden={empty}
                        type="button"
                        value="Next"
                        onClick={handleClickPlus}
                    />
                </DivBtnPost>
            </DivPostpage>
        </div>
    )
}

export default Mycomments
