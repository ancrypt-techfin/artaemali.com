import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageResultAnnouncements from 'src/components/PageInvestor/PageResultAnnouncements'
import { reportCmsT } from 'src/domains/investor'
import investorRelationJson from 'apidata/investor-relation.json'
import { useTranslation } from 'next-i18next'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relation`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    heroBanner: {
      description: g('description') !== null ? g('description') : '',
      image: '/images/investor-relations/inner-banner.jpg',
      mobileImage: '/images/investor-relations/mobile-inner-banner.jpg',
      label: '',
    },
  }
}

// Add get report here if seo is needed
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const pageData = useLocalCms ? investorRelationJson : await fetchCmsData()

  return {
    props: {
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const InvestorPage = (props: { k: any; cms: reportCmsT }) => {
  const { t } = useTranslation()

  return (
    <InvestorLayout
      k={props.k}
      simpleHeader={true}
      tabType={TABS.corporate_information}
      hideTab={true}
      seo={{
        title: `${t('investor_relations.results_announcements')} | Arta TechFin`,
        description: t('page_description.investor_relations'),
        keywords: t('page_keywords.investor_relations'),
      }}
    >
      <PageResultAnnouncements />
    </InvestorLayout>
  )
}

export default InvestorPage
