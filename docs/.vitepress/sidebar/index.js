import webSidebar from './web'
import backSidebar from './back'
import computerSidebar from './computer'
import messySidebar from './messy'
import practiceSidebar from './practice'

export function getSidebar() {
  return { ...webSidebar, ...backSidebar, ...computerSidebar, ...messySidebar, ...practiceSidebar }
}