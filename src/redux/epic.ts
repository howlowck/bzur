import { combineEpics, Epic } from 'redux-observable'
import { catchError } from 'rxjs/operators'
import { starEpic } from './epics/starEpic'
import { joinPlayerEpicEpic } from './epics/joinPlayerEpicEpic'
// Import Epics Here (do not delete this line)

const epics: Epic[] = [
  starEpic,
  joinPlayerEpicEpic,
  // Add Epics Here (do not delete this line)
]

const rootEpic: Epic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )

export default rootEpic
