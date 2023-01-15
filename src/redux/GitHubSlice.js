import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'GitHubSlice/fetchUsers',
        async function(userName){
            const res = await axios.get(url(`https://api.github.com/search/users?q=${userName}&`))
            return {users: res.data.items}
        }
)

export const fetchUser = createAsyncThunk(
    'GitHubSlice/fetchUser',
     async function(userName){
        const {data} = await axios.get(url(`https://api.github.com/users/${userName}?`))
        return {user: data}
    }
)

export const fetchRepos = createAsyncThunk(
    'GitHubSlice/fetchRepos',
     async function(userName){
        const {data} = await axios.get(url(`https://api.github.com/users/${userName}/repos?`))
        return {repos: data}
    }
)

const url = url => `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID


const GitHubSlice= createSlice({
    name: 'GitHubSlice',

    initialState:{
        users: '',
        loading:false,
        user:[],
        repos: '',
        status: null,
        error: null
    },

    reducers:{
        clearUsers(state, action){
            state.users = []
        }
    },

    extraReducers:{
        [fetchUsers.pending  ]: (state)=>{
            state.status = 'loading'
            state.error = null
        },
        [fetchUsers.fulfilled]: (state, action)=>{
            state.status = 'sucsess'
            state.users=[]
            state.users.push(action.payload.users)  
        },
        [fetchUsers.rejected ]: (state, action)=>{
            state.error = action.error
            console.log(state.error)
        },

        [fetchUser.pending  ]: (state)=>{
            state.status = 'loading'
            state.error = null
        },
        [fetchUser.fulfilled]: (state, action)=>{
            state.status = 'sucsess'
            state.user=''
            state.user=action.payload.user
        },
        [fetchUser.rejected ]: (state, action)=>{
            state.status = 'error'
            state.error = action.error
            console.log(state.error)
        },

        [fetchRepos.pending  ]: (state)=>{
            state.status = 'loading'
            state.error = null
        },
        [fetchRepos.fulfilled]: (state, action)=>{
            state.status = 'sucsess'
            state.repos=''
            state.repos = action.payload.repos
        },
        [fetchRepos.rejected ]: (state, action)=>{
            state.status = 'error'
            state.error = action.error
            console.error(state.error)
        },


    }

})

export const {clearUsers} = GitHubSlice.actions

export default GitHubSlice.reducer