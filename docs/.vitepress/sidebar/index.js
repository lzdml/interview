import webSidebar from './web'
import backSidebar from './back'
import computerSidebar from './computer'
import messySidebar from './messy'

export function getSidebar() {
  return { ...webSidebar, ...backSidebar, ...computerSidebar, ...messySidebar }
}