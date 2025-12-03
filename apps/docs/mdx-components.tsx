import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Cards, Card, Steps } from './components/mdx'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...docsComponents,
    Cards,
    Card,
    Steps,
    ...components,
  } as MDXComponents
}
