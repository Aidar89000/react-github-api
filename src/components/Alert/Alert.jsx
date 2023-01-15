import './Alert.scss'
import {useDispatch, useSelector} from 'react-redux'
import { changeAlertVisible } from '../../redux/AlertSlice'


const Alert = () =>{

    const dispatch = useDispatch()

    const title = useSelector(state=>state.AlertSlice.title)
    const message = useSelector(state=>state.AlertSlice.message)

    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <span>
                <strong >{title}</strong> {message}
            </span>
            
            <button onClick={()=>dispatch(changeAlertVisible())} type="button" className="close bg-transparent" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
      </div>
     )
}
export default Alert