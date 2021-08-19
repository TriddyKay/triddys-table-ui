import {DependencyList, useEffect, useState} from "react"

export const useAsyncEffect = (fn: () => Promise<any>, deps: DependencyList) => {
  useEffect(() => { fn() } ,deps)
}

export const usePromise = <T>(fn: () => Promise<T>, defaultValue: T, deps: DependencyList[] = []) : [T] => {
  const [ state, setState ] = useState(defaultValue)

  useAsyncEffect(async () => {
    try {
      const result = await fn()
      setState(result)
    } catch (e) {
      console.error(e)
    }
  }, [])

  return [ state ]
}
