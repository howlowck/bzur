import { Action, createAction } from '@reduxjs/toolkit'
import { Observable } from 'rxjs'
import { filter, mergeMap } from 'rxjs/operators'

export const joinPlayerEpic = createAction<{
  message: string // payload type (change me)
}>('epic/joinPlayerEpic')

export const joinPlayerEpicEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(joinPlayerEpic.match),
    mergeMap((action) => {
      return [
        // output actions
      ]
    })
  )
