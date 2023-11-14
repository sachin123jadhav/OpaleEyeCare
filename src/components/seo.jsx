import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} Opal Eye Care & Glaucoma Center`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Opale Eye Care provides comprehensive eye care services including Cataract, Glaucoma, Refractive services, ROP screening, Diabetic eye checks, and advanced investigative modalities. Your vision is our top priority."/>
    <meta name="keywords" content="eye care, Cataract Services, Glaucoma Services, Refractive Services, Retinopathy of Prematurity, Diabetic eye check, investigative modalities, Pachymetry"/>
    <meta name="author" content="Opale Eye Care"/>
    <meta name="robots" content="index, follow"/>
    <meta name="og:title" content="Opale Eye Care - Comprehensive Eye Care Services"/>
    <meta name="og:description" content="Opale Eye Care provides comprehensive eye care services including Cataract, Glaucoma, Refractive services, ROP screening, Diabetic eye checks, and advanced investigative modalities. Your vision is our top priority."/>
    <meta name="og:image" content="url_to_your_logo_image"/>
    <meta name="og:url" content="url_to_your_website"/>
    <meta name="og:type" content="website"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Opale Eye Care - Comprehensive Eye Care Services"/>
    <meta name="twitter:description" content="Opale Eye Care provides comprehensive eye care services including Cataract, Glaucoma, Refractive services, ROP screening, Diabetic eye checks, and advanced investigative modalities. Your vision is our top priority."/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
