import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserRoleState = 'player' | 'admin' | 'host'

const slice = createSlice({
  name: 'userRole',
  initialState: 'player' as UserRoleState,
  reducers: {
    setRole: (state, action: PayloadAction<UserRoleState>) => {
      return action.payload
    },
  },
})

export const { setRole } = slice.actions

export default slice.reducer
