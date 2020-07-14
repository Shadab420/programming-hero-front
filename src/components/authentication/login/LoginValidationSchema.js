import * as Yup from 'yup';


export default Yup.object().shape({

 
    emailOrPhone: Yup.string()
 
      .required('Required'),
    
        
    password: Yup.string()

        .min(6, 'Too Short!')

        .max(18, 'Too Long!')

        .required('Required'),
 
  });
