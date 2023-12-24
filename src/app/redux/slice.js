const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: []
}

const Slice = createSlice({
    initialState,
    reducers: { // reducers is a object 
        addUsers: (state, action) => { //addUser is a function with 2 parameters
            const data = { // data is an object
                id: nanoid(),
                name: action.name
            }
            state.users.push(data) // this will create new object and push it in the users array
        }
    }
})

export const { addUsers } = Slice.actions
export default Slice.reducer;