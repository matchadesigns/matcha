/** @jsx jsx */
import {useContext} from 'react'
import {jsx, MenuButton} from 'theme-ui'
import {MenuContext} from '../../Layout'

export const MobileButton = props => {
  const ctx = useContext(MenuContext)
  return (
    <div sx={{display: ['flex'], justifyContent: 'center', alignItems: 'center'}} {...props}>
      <MenuButton onClick={ctx.handleToggleMenu} sx={{height: '3rem'}} />
    </div>
  )
}
