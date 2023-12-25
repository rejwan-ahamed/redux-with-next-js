const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: []
}

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: { // reducers is a object 
        addUsers: (state, action) => { //addUser is a function with 2 parameters
            //state represent the current state in the redux
            //action giving us data from the UI
            const data = { // data is an object
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data) // this will create new object and push it in the users array
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data;
        }
    }
})

export const { addUsers, removeUser } = Slice.actions
export default Slice.reducer;