import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, fetchRepos } from '../../redux/GitHubSlice'
import { useEffect } from 'react'
import './Profile.scss'

import Accordion from '../../components/Accordion/Accordion'

const Profile = props =>{

    const dispatch = useDispatch()

    const {userName} = useParams()

    const user = useSelector(state=>state.GitHubSlice.user)
    const repos = useSelector(state=>state.GitHubSlice.repos)

  useEffect(e=>{
    
    dispatch(fetchRepos(userName))
    dispatch(fetchUser(userName))

  }, [])

  const {avatar_url,name,login, location, html_url, bio, 
        blog,company,followers,public_repos,public_gists,following} = user


return ( user ? 

    <div className="card">

        <div className="card__content">

            <div className='card__left-side'>
        
    <img src={avatar_url} className="card-img-top" alt=''/>
        <div class="card-body">
        
            <h5 className="card-title">имя: {name ? name : login } </h5>
            {location && <h5 className="card-text"> местоположение: {location} </h5>}

            <a href={`${html_url}`} className="btn btn-secondary mt-5">
            Открыть профиль
            </a>
        
        </div>
        
        </div>

            <div className='card__right-side'>
         
            {<span>
                
                    { bio &&  <h3><b>Bio:</b> {bio} <hr/></h3>}
                    { blog && <h3><b>Blog:</b> <a href={blog}>{blog}</a><hr/></h3>}
                    { company && <h3 ><b>Company:</b> {company}</h3> }
                
                <div className='badges mb-4'>
                    <span className="badge bg-secondary">repos: {public_repos}</span>
                    <span className="badge bg-primary">followers: {followers}</span>
                    <span className="badge bg-warning">following: {following}</span>
                    <span className="badge bg-success">gists: {public_gists}</span>
                </div>

                <Accordion titleOfAccordion='repos' allInfo={[{title:'repos'}]} useClick={true}>
                    <Accordion allInfo={repos ? repos : [{title: 'null'}]} useClick={false}/>
                </Accordion>

            </span>
         
            }
            </div>
        </div>  
    
</div> : null

    )
}
export default Profile