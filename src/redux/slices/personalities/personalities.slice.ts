import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder
} from '@reduxjs/toolkit'
import personalitiesService from '../../../services/personalities/personalities.service'
import { IPersonalitiesState, IPersonality } from './personalities.types'

const initialState: IPersonalitiesState = {
  entities: {},
  ids: [],
  isLoading: false,
  error: null
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
  extraReducers: (builder: ActionReducerMapBuilder<IPersonalitiesState>) => {
    builder.addCase(getAllPersonalities.pending, state => {
      state.isLoading = true
      state.error = null
    })

    builder.addCase(getAllPersonalities.fulfilled, (state, action) => {
      const byId = action.payload.reduce((obj, personality) => {
        obj[personality.id] = personality
        return obj
      }, {})

      state.entities = byId
      state.ids = Object.keys(byId)
      state.isLoading = false
      state.error = null
    })

    builder.addCase(getAllPersonalities.rejected, state => {
      state.isLoading = false
      state.error = 'Error fetching the data'
    })

    builder.addCase(getPersonalitiesById.pending, state => {
      state.isLoading = true
      state.error = null
    })

    builder.addCase(getPersonalitiesById.fulfilled, (state, action) => {
      const indexInIds = state.ids.findIndex(id => id === action.payload.id)
      if (indexInIds === -1) state.ids.push(action.payload.id)

      state.entities[action.payload.id] = action.payload
      state.isLoading = false
      state.error = null
    })

    builder.addCase(getPersonalitiesById.rejected, state => {
      state.isLoading = false
      state.error = 'Error fetching the data'
    })

    builder.addCase(updatePersonalitiesById.pending, state => {
      state.isLoading = true
      state.error = null
    })

    builder.addCase(updatePersonalitiesById.fulfilled, (state, action) => {
      const indexInIds = state.ids.findIndex(id => id === action.payload.id)
      if (indexInIds === -1) state.ids.push(action.payload.id)

      state.entities[action.payload.id] = action.payload
      state.isLoading = false
      state.error = null
    })

    builder.addCase(updatePersonalitiesById.rejected, state => {
      state.isLoading = false
      state.error = 'Error updating the data'
    })
  }
})
