import { createSelector } from 'reselect'

export const getCurrentStepId = state => state.currentStep

export const getSteps = state => state.steps

export const getCurrentStep = createSelector(
  getCurrentStepId,
  getSteps,
  (id, steps) => steps[id]
)