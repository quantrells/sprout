import { createSelector } from 'reselect'

export const getAssistance = state => state.assistance

export const getAssistanceImg = createSelector(
  getAssistance,
  (assistance) => assistance.img || ''
)