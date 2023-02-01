import { type CustomIconProps } from '../..'

export default function QRIcon ({
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 1.0435V5.16389H5.16386V1.0435C5.16386 0.46721 4.69668 3.05176e-05 4.12039 3.05176e-05H1.04347C0.46718 3.05176e-05 0 0.467208 0 1.0435ZM1.55183 1.55186H3.61202V3.61206H1.55183V1.55186Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16 12.3879V6.02006H8.42812V9.97991H9.97996V7.57189H14.4482V12.3879H16Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 10.8361V14.9565C0 15.5328 0.46718 16 1.04347 16H5.16386V10.8361H0ZM3.61202 14.4481H1.55183V12.3879H3.61202V14.4481Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16 14.9565V13.2441H14.4481V14.4481H12.0401V16H14.9565C15.5328 16 16 15.5328 16 14.9565Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M14.9564 3.05176e-05H10.836V5.16389H15.9998V1.0435C15.9998 0.46721 15.5327 3.05176e-05 14.9564 3.05176e-05ZM12.3878 3.61206V1.55186H14.448V3.61206H12.3878Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.16386 6.02006H0V9.97991H1.55183V7.57189H3.61202V8.42808H2.40802V9.97991H5.16386V6.02006Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.02006 3.05176e-05V5.16389H9.97991V3.61206H7.57189V3.05176e-05H6.02006Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.57189 10.8361V9.63211H6.02006V13.592H7.57189V12.388H12.0401V13.592H13.5919V8.4281H10.8361V9.97993H12.0401V10.8361H7.57189Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.42807 14.4481H6.02006V16H11.1839V14.4481H9.97991V13.2441H8.42807V14.4481Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.57189 8.7759V6.02006H6.02006V8.7759H7.57189Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M9.97996 3.05176e-05H8.42812V2.75587H9.97996V3.05176e-05Z'
        fill={color}
      />
    </svg>
  )
}
