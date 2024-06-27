import React, { Component } from 'react'
import { useTranslation } from "react-i18next"

function App() {

  const { t, i18n } = useTranslation();
  const handlerChange = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className='container' >
      <div className="navbar">
        <h1>{t("registratsiya")}</h1>


        <select id='select' onChange={(e) => handlerChange(e.target.value)} className='language' name='selectinput'>
          <option value={"uz"} >UZ</option>
          <option value={"ru"} >RU</option>
          <option value={"en"} >EN</option>
        </select>
      </div>





      <div className='section' >
        <h2>{t("ariza")}</h2>



        <div className='section_child' >

          <div className='grid' >

            <div className='input_div'>
              <label htmlFor="name">{t("ism")}</label> <br />
              <input id="name" type="text" placeholder={t("ism")} />
            </div>

            <div className='input_div' >
              <label htmlFor="seria">{t("pasport_seria")}</label><br />
              <input id="name" type="text" placeholder='AA' />

            </div>

            <div className='input_div' >
              <label htmlFor="name">{t("fakultet")}</label><br />
              <select id='selection' name='academy'>
              <option value={"filologiya"} >{t("filologiya")}</option>
                <option value={"Tabiiy fanlar"} >{t("tabiiy_fanlar")}</option>
                <option value={"Aniq fanlar"} >{t("aniq_fanlar")}</option>
              </select>
            </div>



            <div className='input_div' >
              <label htmlFor="select">{t("talim_yonalishi")}</label><br />
              <select id='selection' name='academy'>
                <option value={"filologiya"} >{t("filologiya")}</option>
                <option value={"Tabiiy fanlar"} >{t("tabiiy_fanlar")}</option>
                <option value={"Aniq fanlar"} >{t("aniq_fanlar")}</option>
              </select>
            </div>


            <div className='input_div' >
              <label htmlFor='name' >{t("rasm")}</label> <br />
              <input type="file" name="myfile" />
            </div>


          </div>



          <div className='grid' >

            <div className='input_div'>
              <label htmlFor="name">{t("familiya")}</label> <br />
              <input id="name" type="text" placeholder={t("familiya")} />
            </div>

            <div className='input_div' >
              <label htmlFor="seria">{t("pasport_nomer")}</label><br />
              <input id="name" type="number" placeholder='1234' />

            </div>

            <div className='input_div' >
              <label htmlFor="name">{t("talim_shakli")}</label><br />
              <select id='selection' name='academy'>
                <option value={"kunduzgi"} >{t("kunduz")}</option>
                <option value={"kechki"} >{t("kechki")}</option>
                <option value={"sirtqi"} >{t("sirtqi")}</option>
              </select>
            </div>






            <div className='input_div' >
              <label htmlFor='name' >{t("pasport_fayl")}</label> <br />
              <input type="file" name="myfile" />
            </div>
          </div>



          <div className='grid' >
            <div className='input_div'>
              <label htmlFor="name">{t("sharif")}</label> <br />
              <input id="name" type="text" placeholder={t("sharif")} />
            </div>



            <div className='input_div' >
              <label htmlFor="sex">{t("gender")}</label><br />
              <select id='selection' name='sex'>
                <option value={"erkak"} >{t("erkak")}</option>
                <option value={"ayol"} >{t("ayol")}</option>
              </select>
            </div>



            <div className='input_div' >
              <label htmlFor="talim">{t("talim_darajasi")}</label><br />
              <select id='selection' name='talim'>
                <option value={"bakalavr"} >{t("bakalavr")}</option>
                <option value={"magistr"} >{t("magistr")}</option>
              </select>
            </div>






            <div className='input_div' >
              <label htmlFor='name' >{t("diplom_file")}</label> <br />
              <input type="file" name="myfile" />
            </div>
          </div>
        </div>



        <button type='submit'>
          <span>{t("yuborish")}</span>
        </button>
      </div>



    </div>
  );
}

export default App;
