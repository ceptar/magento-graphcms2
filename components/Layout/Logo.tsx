import { Logo as LogoBase } from './Logoparts'
import svgLogo from './graphcommerce.svg'

export function Logo() {
  return (
    <LogoBase

    // href='/'
    sx={(theme) => ({

        '& .GcLogo-logo': {
          display: 'flex',
          minHeight: '40px',
          maxHeight: '60px',
          height: 'auto',
          width: 'auto',
          justifyContent: 'space-between',
          marginRight: 'auto',


          pointerEvents: 'all',
          // filter: (theme) => (theme.palette.mode === 'dark' ?  'none' : 'invert(100%)'),
        },



        
})}
      image={{ alt: 'GraphCommerce Logo', src: svgLogo, unoptimized: true }}
    />
  )
}