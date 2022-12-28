import { useSyncExternalStore } from 'react'
import { Link, useRoute, LinkProps, BaseLocationHook } from 'wouter'

const currentLocation = () => window.location.hash.replace(/^#/, '') || '/'

export const navigate = (to: string) => {
  window.location.hash = to
}

export const useHashLocation: BaseLocationHook = () => {
  // `useSyncExternalStore` is available in React 18, or you can use a shim for older versions
  const location = useSyncExternalStore(
    // first argument is a value subscriber: it gives us a callback that we should call
    // whenever the value is changed
    onChange => {
      window.addEventListener('hashchange', onChange)
      return () => window.removeEventListener('hashchange', onChange)
    },

    // the second argument is function to get the current value
    () => currentLocation()
  )

  return [location, navigate]
}

export const ActiveLink = (props: LinkProps) => {
  const [isActive] = useRoute(props.href!)
  return (
    <Link {...props}>
      <a href={props.href} className={isActive ? 'active' : ''}>
        {props.children}
      </a>
    </Link>
  )
}
