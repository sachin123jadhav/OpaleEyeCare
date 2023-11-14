import Banner from '@/components/career/banner'
import SEO from '@/components/seo'
import LayoutTwo from '@/layout/layout-2'
import Wrapper from '@/layout/wrapper'
import React from 'react'

function index() {
  return (
    <div>
    <Wrapper>
    <LayoutTwo>
    <Banner></Banner>
    <SEO  pageTitle="Career"></SEO>
<h1>Coming Soon</h1>

    </LayoutTwo>


    </Wrapper>
    
    
    </div>
  )
}

export default index