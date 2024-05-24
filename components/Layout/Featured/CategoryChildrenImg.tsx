import { Scroller, ScrollerProvider } from '@graphcommerce/framer-scroller'
import { ProductListParams } from '@graphcommerce/magento-product'
import { productListLink } from '@graphcommerce/magento-product/hooks/useProductListLink'
import { extendableComponent } from '@graphcommerce/next-ui'
import { Box, Link, SxProps, Theme } from '@mui/material'
import { CategoryChildrenImgFragment } from './CategoryChildrenImgFragment.gql'

type CategoryChildrenImgProps = Omit<CategoryChildrenImgFragment, 'uid'> & {
  params: ProductListParams
  sx?: SxProps<Theme>
}

const name = 'CategoryChildrenImg' as const
const parts = ['container', 'scroller', 'link'] as const
const { classes } = extendableComponent(name, parts)

export function CategoryChildrenImg(props: CategoryChildrenImgProps) {
  const { children, params, sx = [] } = props

  const { currentPage, ...paramsWithoutCurrentPage } = params

  if (!children || children.length === 0) return null

  return (
    <ScrollerProvider scrollSnapAlign='none'>
      <Box
        className={classes.container}
        sx={[
          (theme) => ({
            display: 'flex',
            justifyContent: 'center',
            marginBottom: theme.spacings.sm,
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Scroller
          className={classes.scroller}
          hideScrollbar
          sx={{ gridAutoColumns: `max-content` }}
        >
          {children.map((cat) => {
            if (!cat?.url_path || !cat.name || !cat.include_in_menu) return null

            return (
              <Link
                key={cat.url_path}
                underline='none'
                color='inherit'
                href={productListLink({
                  ...paramsWithoutCurrentPage,
                  url: cat.url_path,
                  filters: { category_uid: { eq: cat.uid } },
                })}
                className={classes.link}
                sx={(theme) => ({
                  whiteSpace: 'nowrap',
                  display: 'block',
                  marginRight: `${theme.spacings.xxs}`,
                  marginLeft: `${theme.spacings.xxs}`,
                  typography: 'h6',
                  position: 'relative',
                  paddingBottom: '8px',
                  '&:before': {
                    content: '""',
                    width: 40,
                    height: 2,
                    background: theme.palette.primary.main,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    opacity: 0,
                    transition: 'opacity .2s ease, bottom .2s ease',
                    bottom: 0,
                  },
                  '&:hover': {
                    '&:before': {
                      opacity: 1,
                      bottom: 5,
                    },
                  },
                })}
              >
                {cat.name}
              </Link>
            )
          })}
        </Scroller>
      </Box>
    </ScrollerProvider>
  )
}
