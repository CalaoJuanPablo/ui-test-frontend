import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import personalitiesService from '../../../services/personalities/personalities.service'
import { IPersonalitiesState, IPersonality } from './personalities.types'

const initialState: IPersonalitiesState = {
  entities: {},
  ids: []
}

const getAllPersonalities = createAsyncThunk(
  'personalities/getAll',
  async () => {
    const response = await personalitiesService.getAll()
    return response as IPersonality[]
  }
)

const getPersonalitiesById = createAsyncThunk(
  'personalities/getById',
  async (personalityId: string) => {
    const response = await personalitiesService.getById(personalityId)
    return response as IPersonality
  }
)

const updatePersonalitiesById = createAsyncThunk(
  'personalities/updateById',
  async ({
    personalityId,
    vote
  }: {
    personalityId: string
    vote: 'up' | 'down'
  }) => {
    const response = await personalitiesService.updateById(personalityId, vote)
    return response as IPersonality
  }
)

const personalitiesSlice = createSlice({
  name: 'personalities',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllPersonalities.fulfilled, (state, action) => {
      const byId = action.payload.reduce((obj, personality) => {
        obj[personality.id] = personality
        return obj
      }, {})

      state.entities = byId
      state.ids = Object.keys(byId)
    })

    builder.addCase(getPersonalitiesById.fulfilled, (state, action) => {
      const indexInIds = state.ids.findIndex(id => id === action.payload.id)
      if (indexInIds === -1) state.ids.push(action.payload.id)

      state.entities[action.payload.id] = action.payload
    })

    builder.addCase(updatePersonalitiesById.fulfilled, (state, action) => {
      const indexInIds = state.ids.findIndex(id => id === action.payload.id)
      if (indexInIds === -1) state.ids.push(action.payload.id)

      state.entities[action.payload.id] = action.payload
    })
  }
})

export default personalitiesSlice.reducer

export const personalitiesActions = {
  getAll: getAllPersonalities,
  getById: getPersonalitiesById,
  updateById: updatePersonalitiesById
}
