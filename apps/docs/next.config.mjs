import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  contentDirBasePath: '/docs',
})

export default withNextra({
  reactStrictMode: true,
})
