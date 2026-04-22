import type { PropsWithChildren } from 'react'
import './Container.css'

function Container({ children }: PropsWithChildren) {
  return <div className="container">{children}</div>
}

export default Container
