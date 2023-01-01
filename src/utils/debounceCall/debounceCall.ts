export function debounceCall <F extends (...a: any[]) => void> (target: F, debounce = 300): F {
  let timer: any

  return ((...args) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      target(...args)
    }, debounce)
  }) as F
}
