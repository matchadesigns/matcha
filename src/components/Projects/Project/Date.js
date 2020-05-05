/** @jsx jsx */
import {format, parseISO} from 'date-fns'
import {jsx} from 'theme-ui'

export const Date = ({date}) => (
  <div sx={{mt: 3, color: 'textMuted'}}>Date de réalisation : {format(parseISO(date), 'dd/MM/yyyy')}</div>
)
