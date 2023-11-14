import Gallery from '@/components/home/home-2/gallery'
import SEO from '@/components/seo'
import HeaderTwo from '@/layout/header/header-two'
import LayoutTwo from '@/layout/layout-2'
import Wrapper from '@/layout/wrapper'
import React from 'react'

function index() {
  return (
    <>
<Wrapper>
<LayoutTwo>
<SEO pageTitle="Gallery" />
<Gallery></Gallery>
</LayoutTwo>
</Wrapper>

    </>
  )
}

export default index