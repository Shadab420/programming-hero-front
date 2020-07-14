import * as Yup from 'yup';


export default Yup.object().shape({

    name: Yup.string()
 
      .min(3, 'Too Short!')
 
      .max(25, 'Too Long!')
 
      .required('Required'),
 
    email: Yup.string()
 
      .email('Invalid email')
 
      .required('Required'),
    
    phone: Yup.string()

        .min(3, 'Too Short!')

        .max(25, 'Too Long!')

        .required('Required'),
        
    password: Yup.string()

        .min(6, 'Too Short!')

        .max(18, 'Too Long!')

        .required('Required'),
 
  });
