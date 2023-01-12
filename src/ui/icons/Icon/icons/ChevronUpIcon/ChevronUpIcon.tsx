import { CustomIconProps } from '../..'

export default function ChevronUpIcon ({
  size = 16,
  color = 'currentColor',
  ...props
}: CustomIconProps = {}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M14.4963 11.7915C14.932 12.1486 15.5291 12.0302 15.83 11.5271C16.131 11.0241 16.0217 10.3267 15.586 9.96965L8.55726 4.20855C8.38941 4.07097 8.1976 4.00396 8.00799 4.00233C7.8132 4.00024 7.6153 4.06709 7.44274 4.20853L0.413956 9.96963C-0.0217209 10.3267 -0.130957 11.024 0.169974 11.5271C0.470903 12.0302 1.06804 12.1485 1.50372 11.7914L7.99999 6.46682L14.4963 11.7915Z'
        fill={color}
      />
    </svg>
  )
}
