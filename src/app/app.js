export default function validateTel(code, tel) {
    tel = tel.replace(/[^\d]*/g, '') // Убираем все лишнее 

    if(!/^\+7/g.test(tel)) {
        tel = tel.replace(/(\d+)(\d{10})/, `${code}$2`) // форматируем код страны
    }
 
    return tel
}

// console.log(validateTel('+86', '8 (000) 000 0000'))