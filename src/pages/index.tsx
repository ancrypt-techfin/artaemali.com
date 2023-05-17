import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Header from 'src/components/Header/Header';
import { Slides } from 'src/components/PageHome/PageHome';
import { Seo } from 'src/components/Seo';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Seo
        title={`${t('page_title.home')} | Arta TechFin`}
        description={t('page_description.home')}
        keywords={t('page_keywords.home')}
        ga="Homepage"
      />
      <Header fontSize={'1em'} src="homepage" />
      <main>
        <Slides k={{}} setShowWechatPopup={() => {}} />
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Home;
