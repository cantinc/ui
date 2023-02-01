import { type CustomIconProps } from '../..'

export default function BrickIcon ({
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
        d='M5.40889 7.03556C4.87624 7.03556 4.44444 7.46736 4.44444 8.00001C4.44444 8.53266 4.87624 8.96445 5.40889 8.96445H10.5911C11.1238 8.96445 11.5556 8.53266 11.5556 8.00001C11.5556 7.46736 11.1238 7.03556 10.5911 7.03556H5.40889Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.99555 16C12.4158 16 16 12.4178 16 8C16 3.58222 12.4247 0 8.00445 0C3.58421 0 0 3.58222 0 8C0 12.4178 3.57532 16 7.99555 16ZM7.99555 1.92889C11.3485 1.92889 14.0789 4.64889 14.0789 8C14.0789 11.3511 11.3574 14.0711 8.00445 14.0711C4.65147 14.0711 1.92996 11.3511 1.92996 8C1.92996 4.64889 4.64258 1.92889 7.99555 1.92889Z'
        fill={color}
      />
    </svg>
  )
}
