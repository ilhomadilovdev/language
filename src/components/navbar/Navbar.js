import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

function Navbar({ handlerChange }) {
    return (
        <div className='navbar_tag'>
            <h3> one staff</h3>
            <ul>
                <li><h4>Преимущество</h4></li>
                <li><h4>Услуги</h4></li>
                <li><h4>Клиенты</h4></li>
                <li><h4>Контакты</h4></li>
            </ul>
            <div className='phone'>
                <div className='phone_child'>
                    <FaPhoneAlt className='icons' />
                    <p>+998936547899</p>
                </div>

                <div className='select'>
                    <select id='select' onChange={(e) => handlerChange(e.target.value)} className='language' name='selectinput'>
                        <option value={"uz"} >UZ</option>
                        <option value={"ru"} >RU</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Navbar