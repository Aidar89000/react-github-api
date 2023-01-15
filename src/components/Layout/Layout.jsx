import { Outlet } from "react-router-dom"
import './Layout.scss'
import Navbar from "../Navbar/Navbar"
import Alert from "../Alert/Alert"
import {useDispatch, useSelector} from 'react-redux'

function Layout(props){

    const dispatch = useDispatch()

    const alertIsVisible = useSelector(state=>state.AlertSlice.alertIsVisible)

    return(
        <main>

            <Navbar>
                
            </Navbar>
        
            { alertIsVisible ? <Alert/> : null}

            <Outlet></Outlet>
            {props.children}
        </main>
        )
}
export default Layout