const allowedAToZWord=(value)=>{
    const allowedAToZWord = /^[A-Za-z\s]+$/
    return allowedAToZWord.test(value)
}

const allowedNumberOnly=(value)=>{

    const allowedNumberOnly=/^[0-9]*$/
    return allowedNumberOnly.test(value)
}



const allowedBooleanOnly=(value)=>{
    const booleanAllow =/^(true|false)$/i
    return booleanAllow.test(value)
    
}
const allowedEmailOnly=(value)=>{
    const gmailRegex = /^[\w._%+-]+@gmail\.com$/;
    return gmailRegex.test(value)
}
module.exports=
{allowedAToZWord,
     allowedNumberOnly,
     allowedBooleanOnly,
     allowedEmailOnly}