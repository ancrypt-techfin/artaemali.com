import Image from 'next/image'
import culture_bg from './images/culture_bg.png'
import { textClass } from 'src/components/Text'
import { useState } from 'react'
import { IconListItemArrow } from 'src/components/Svg/Icon'
import { Hr } from 'src/components/Hr'
import { gsap } from 'gsap'
import { FadeUp } from 'src/components/FadeUp'
import { PageAboutCmsT } from 'src/pages/about-us'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import cn from 'classnames'


export const SectionCulture = (props: { k: PageAboutCmsT }) => {
  const { k } = props
  const { t } = useTranslation('common')
  const {locale} = useRouter()

  const [selectedIndex, _setSelectedIndex] = useState(0)
  const setSelectedIndex = (index: number) => {
    _setSelectedIndex(index)
    gsap.fromTo('.fade-in', { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.2 })
  }

  

  return (


    <div className="group/bg relative z-1 overflow-hidden" id="culture">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={culture_bg} alt="" fill className="object-cover" />
      </div>



      <div className="arta-container relative mx-auto grid pt-16 pb-8 md:grid-cols-2 md:py-36">
      <div className="mb-12 flex flex-col justify-center">
        <FadeUp>
          <>
            <h2 className={`${textClass.h2_style2} mb-2`}>Vision, Mission & Values</h2>
            <p className={textClass.body_regular}>We strive for excellence through a culture that empowers exceptional individuals. Our mission is to assemble and nurture a team of remarkable talents, driving innovation and achieving extraordinary outcomes. Guided by integrity, collaboration, and continuous growth, we create an environment where the best people thrive, yielding exceptional results.</p>
          </>
        </FadeUp>
      </div>
      <div className="md:pl-8">
        <h3 className={textClass.h3_style2}>{k.culture.sectionTitle}</h3>
        <Hr />
        <ul className={cn(locale!=='en' && 'min-h-[360px] lg:min-h-[340px]')}>
          <li className="group/list mb-8 flex flex-col overflow-hidden">
            <button
              className={
                'flex items-start overflow-hidden opacity-70 duration-200 ease-out group-hover/list:translate-x-0 group-hover/list:opacity-100' +
                (selectedIndex === 0 ? ' translate-x-0 opacity-100' : ' -translate-x-7')
              }
              onMouseEnter={() => selectedIndex !== 0 && setSelectedIndex(0)}
            >
              <IconListItemArrow className="h-4 w-4 pt-[10px]" fill="#593725" />
              <span className={`${textClass.title} ml-3`}>Vision</span>
            </button>
            <span
              className={
                `fade-in ${textClass.body_regular} mt-4` + (selectedIndex === 0 ? '' : ' hidden')
              }
            >
              Solve real-world problems with the use of Create secure and efficient solutions through blockchain technology and cryptography to solve real-world problems.
            </span>
          </li>
          <li className="group/list mb-8 flex flex-col overflow-hidden">
            <button
              className={
                'flex items-start overflow-hidden opacity-70 duration-200 ease-out group-hover/list:translate-x-0 group-hover/list:opacity-100' +
                (selectedIndex === 1 ? ' translate-x-0 opacity-100' : ' -translate-x-7')
              }
              onMouseEnter={() => selectedIndex !== 1 && setSelectedIndex(1)}
            >
              <IconListItemArrow className="h-4 w-4 pt-[10px]" fill="#593725" />
              <span className={`${textClass.title} ml-3`}>Mission</span>
            </button>
            <span
              className={
                `fade-in ${textClass.body_regular} mt-4` + (selectedIndex === 1 ? '' : ' hidden')
              }
            >
              Our mission is to leverage the power of blockchain technology and cryptography to provide reliable, scalable, and cost-effective infrastructure solutions to our clients. We strive to be a trusted partner in clients’ digital transformation journey by delivering innovative and customized solutions that meet their unique business requirements.
            </span>
          </li>
          <li className="group/list mb-8 flex flex-col overflow-hidden">
            <button
              className={
                'flex items-start overflow-hidden opacity-70 duration-200 ease-out group-hover/list:translate-x-0 group-hover/list:opacity-100' +
                (selectedIndex === 2 ? ' translate-x-0 opacity-100' : ' -translate-x-7')
              }
              onMouseEnter={() => selectedIndex !== 2 && setSelectedIndex(2)}
            >
              <IconListItemArrow className="h-4 w-4 pt-[10px]" fill="#593725" />
              <span className={`${textClass.title} ml-3`}>Values</span>
            </button>
            <span
              className={
                `fade-in ${textClass.body_regular} mt-4` + (selectedIndex === 2 ? '' : ' hidden')
              }
            >
              We are committed to fostering a culture of collaboration, innovation, and continuous learning that enables us to stay at the forefront of blockchain technology and deliver exceptional value to our clients.
            </span>
          </li>
        </ul>
      </div>
    </div>


      <div className="arta-container relative mx-auto grid pt-16 pb-8 md:grid-cols-2 md:py-36">
        <div className="mb-12 flex flex-col justify-center">
          <FadeUp>
            <>
              <h2 className={`${textClass.h2_style2} mb-2`}>{t('about_us.culture_values')}</h2>
              <p className={textClass.body_regular}>{k.culture.subtitle1}</p>
              
            </>
          </FadeUp>
        </div>
        <div className="md:pl-8">
          <h3 className={textClass.h3_style2}>{k.culture.sectionTitle}</h3>
          <Hr />
          <ul className={cn(locale!=='en' && 'min-h-[360px] lg:min-h-[340px]')}>
            {k.culture.valueList.map((value, index) => {
              const isSelected = index === selectedIndex
              return (
                <li key={index} className="group/list mb-8 flex flex-col overflow-hidden">
                  <button
                    className={
                      'flex items-start overflow-hidden opacity-70 duration-200 ease-out group-hover/list:translate-x-0 group-hover/list:opacity-100' +
                      (isSelected ? ' translate-x-0 opacity-100' : ' -translate-x-7')
                    }
                    onMouseEnter={() => selectedIndex != index && setSelectedIndex(index)}
                  >
                    <IconListItemArrow className="h-4 w-4 pt-[10px]" fill="#593725" />
                    <span className={`${textClass.title} ml-3`}>{value.title}</span>
                  </button>
                  <span
                    className={
                      `fade-in ${textClass.body_regular} mt-4` + (isSelected ? '' : ' hidden')
                    }
                  >
                    {value.description}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>


    </div>
  )
}
