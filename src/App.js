import React, { Component, useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next"
import Navbar from './components/navbar/Navbar';
import imagerrr from './images/49.png'
import { CiSun } from "react-icons/ci";
import { motion } from 'framer-motion';
import { CgArrowTopRight } from "react-icons/cg";
import { useInView } from 'react-intersection-observer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const targetRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.5 });


  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const { top } = targetRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsScrolled(window.scrollY > top - windowHeight / 3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetRef]);




  const { t, i18n } = useTranslation();
  const handlerChange = (lng) => {
    i18n.changeLanguage(lng)

  }




  return (
    <div>
      <div className='rr'>
        <Navbar handlerChange={handlerChange} />
      </div>

      <div className='rr_child'>
        <img src={imagerrr} alt='rasm' />
        <div className='container_child'>
          <div className='colors'>
          </div>
          <h2>БУХГАЛТЕРСКИЙ </h2>
          <h3>АУТСОРСИНГ</h3>
          <h4> в Ташкенте</h4>

          <button>Отправить заявку</button>
          <div className='parent'>
            <div >
              <div className='parent_children'>
                <div className='icont'>
                  <CgArrowTopRight className='aykon' />
                  <div>
                    <p>25 лет</p>
                    <span>на рынке</span>
                  </div>
                </div>
                <div className='icont'>
                  <CgArrowTopRight className='aykon' />
                  <div>
                    <p>+200</p>
                    <span>зарегистированный <br /> компании</span>
                  </div>
                </div>
                <div className='icont'>
                  <CgArrowTopRight className='aykon' />
                  <div>
                    <p>300000$</p>
                    <span>помогли сэномить клиентам</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='section-2'>
        <div className='container two'>
          <div className='child_section-2'>
            <h2>миссия компании</h2>
            <p>one staff</p>
          </div>
          <div className='child_section-2'>
            <span>
              -точность надежност и успех.Мы создаем
              структурированую работу,всегда думаем
              на шаг вперед и тщательно проверяем
              каждую деталь.При этом ценим человеческий
              подход и искренний сервис:трудимся с душой
              и искренние стремимся поддержать каждого клиента.
              <br />
              <br />
              <br />
              Мы успешно сотруднием с производинным  предприятами,медицинский клиниками ,маркетплайсами,
              и многим другим направление бизнеса
            </span>
          </div>
        </div>
      </div>
      <div className='container' >

        <div className='section-3'>
          <h2 className='title'>ПОЧЕМУ МЫ ЛУЧШЕЕ?</h2>
          <div ref={ref}>
            <motion.div
              ref={targetRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: isScrolled ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='parent_text'>
                <div className='text'>
                  <p>мы предлагаем не просто опыть
                    специалистов,а слаженную систему
                    и коллективный разум
                    рфботфющий как  <br /> команда pit stop на Формуле-1</p>
                  <CiSun className='icons-div' />
                </div>
                <div className='text twor'>
                  <p>Отвечаем в Телеграм за 5 минут,всегда на связи,соблюдаем  <br /> сроки</p>
                  <CiSun className='icons-div' />
                </div>
                <div className='text'>
                  <p>мы не уходим в отпуске,не болеем и не торопимся домой   <br /> в пятницу</p>
                  <CiSun className='icons-div' />
                </div>
              </div>
              <div className='parent_text'>
                <div className='bug'>

                </div>
                <div className='text two '>
                  <p> Переводим бухгалтерского язык на понятий -никакого Будь то сервис доставки еды,магазин одежды  сложного жаргона и запутатинный <br /> терминов,только четко и ясно  </p>
                  <CiSun className='icons-div' />
                </div>
                <div className='text'>
                  <p>Будь то сервис доставки еды,магазин одежды или салон красоты-нащи специалисты уверенно справляются  <br /> с задачами в любой сферы</p>
                  <CiSun className='icons-div' />
                </div>

              </div>
              <div className='parent_text'>
                <div className='text twor'>
                  <p>мы предлагаем не просто опыть
                    специалистов,а слаженную систему
                    и коллективный разум
                    рфботфющий как  <br /> команда pit stop на Формуле-1</p>
                  <CiSun className='icons-div' />
                </div>
                <div className='text'>
                  <p>Отвечаем в Телеграм за 5 минут,всегда на связи,соблюдаем сроки</p>
                  <CiSun className='icons-div' />
                </div>
                <div className='text twor'>
                  <p>мы не уходим в отпуске,не болеем и не торопимся домой   <br /> в пятницу</p>
                  <CiSun className='icons-div' />
                </div>
              </div>
            </motion.div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
