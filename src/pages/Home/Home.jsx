import Search from "../../components/Search/Search"
import Card from "../../components/Card/Card"
import './Home.scss'
import {useDispatch, useSelector} from 'react-redux'
import { pushAlertText } from "../../redux/AlertSlice"
import { useState, useEffect } from "react"
import { clearUsers, fetchUsers} from '../../redux/GitHubSlice'

const Home = props =>{

  let array = useSelector(state=>state.GitHubSlice.users)

  const [userName, setUserName] = useState('A')

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUsers(userName))
  },[])

  function inputKeys(e){
    if (e.key==='Enter' && !userName){
      dispatch(pushAlertText({title: 'пустое поле ввода', message: 'введите ник пользователя, который вам нужен'}))
      clearUsers()
    }

    else if (e.key==='Enter' && userName) {
      dispatch(fetchUsers(userName))
    }
  }

  function inputHandler(){
    if (!userName){
      dispatch(pushAlertText({title: 'пустое поле ввода', message: 'введите ник пользователя, который вам нужен'}))
      clearUsers()
    }

    else{
      dispatch(fetchUsers(userName))
    }
  }

    return(
       <>
       <div className="search-container">
          <Search onKeyPress={inputKeys}
          onClick={inputHandler}
          onChange={e=>setUserName(e.target.value)}
          text='введите имя пользователя:' />
        </div>
        
        <button className="btn" onClick={()=>dispatch(clearUsers())}>Очистить</button>
    
        <div className="cards"> 

          {array &&
              array[array.length-1].map(e=>

              <Card key={e.id} login={e.login}
              avatar_url={e.avatar_url} url={e.url}/>)
          }

        </div>
       </>
     )
}
export default Home