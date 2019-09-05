import { createSelector } from 'reselect'

export const getCurrentStepId = state => state.currentStep

export const getSteps = state => { console.log('select state', state); return state.steps}

export const getCurrentStep = createSelector(
  getCurrentStepId,
  getSteps,
  (id, steps) => {return steps[id]}
)