

const validation=(values)=>{
    let errors={};
    if(!values.fullname){
        errors.fullname="name is required."
    }
    if(!values.email){
        errors.email="Email is required.";
    }
    else if(!/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.password){
        errors.password="password is required."
    }
    else if(values.password.length <5){
        errors.password="password must be more than 5 characters"
    }
    return errors;
};

export default validation;