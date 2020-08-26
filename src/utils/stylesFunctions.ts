import { isFunction } from 'lodash'

export const switchStyle = (prop: any) => (stylesObj: any) => (props: any) => {
  const propValue = props[prop] || 'default'
  const switchObj = stylesObj[propValue]

  if (isFunction(switchObj)) {
    return switchObj(props)
  }

  return switchObj
}
