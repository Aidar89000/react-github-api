import { createSlice } from '@reduxjs/toolkit'

const AlertSlice= createSlice({
    name: 'AlertSlice',

    initialState:{
        alertIsVisible: false,
        title: '',
        message: ''
    },

    reducers:{

        changeAlertVisible(state,action){
            state.alertIsVisible = !state.alertIsVisible
        },

        pushAlertText(state, action){
            state.title = action.payload.title
            state.message = action.payload.message

            state.alertIsVisible = true
        },

        closeAlert(state){
            state.alertIsVisible = false
        },

    }
})

export const {changeAlertVisible,closeAlert,pushAlertText} = AlertSlice.actions

export default AlertSlice.reducer