import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { notFound } from 'next/navigation'
import { useMDXComponents } from '../../mdx-components'
import type { FC, ReactNode } from 'react'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  try {
    const { metadata } = await importPage(params.mdxPath)
    return metadata
  } catch {
    return { title: 'Not Found' }
  }
}

type PageProps = {
  params: Promise<{
    mdxPath?: string[]
  }>
}

export default async function Page(props: PageProps) {
  const params = await props.params

  try {
    const result = await importPage(params.mdxPath)
    const { default: MDXContent, toc, metadata, ...rest } = result
    const Wrapper = useMDXComponents().wrapper as FC<{ toc: unknown; metadata: unknown; children: ReactNode }>

    if (!Wrapper) {
      return <MDXContent {...props} params={params} />
    }

    return (
      <Wrapper toc={toc} metadata={metadata} {...rest}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )
  } catch {
    notFound()
  }
}
