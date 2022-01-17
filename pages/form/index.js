import React from 'react';
import { Formik, Form } from 'formik';
import { InputField } from './InputField';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { supabase } from '../../utils/supabaseClient';

const MyComponent = () => {
    const validate = Yup.object({
        username: Yup.string().min(5, 'Must be 5 character or more').max(16, 'Must be 16 character or less')
            .required('Required'),
        companyname: Yup.string().min(6, 'Must be 6 character or more').max(15, 'Must be 15 character or less')
            .required('Required'),
        address: Yup.string().min(15, 'Must be 15 character or more').max(30, 'Must be 30 character or less')
            .required('Required'),
        phonenum: Yup.string().min(11, 'Must be 11 character').max(11, 'Must be 11 character')
            .required('Required'),
    });
    async function create (values){
        const { data, error } = await  supabase
        .from('testprofiles')
        .insert([
          { id:uuidv4(), username: values.username, companyname:values.companyname, address:values.address,phonenum:values.phonenum  }
        ])

    }
    return (
        <Formik
            initialValues={{
                username: '',
                companyname: '',
                address: '',
                phonenum: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                //console.log(values.username);
                create(values);
            }} 
            
        >
            {formik => (
                <div>
                    <h1>Form validaion</h1>
                    <Form>
                        <InputField label="User Name" name="username" type="text" />
                        <InputField label="Company Name" name="companyname" type="text" />
                        <InputField label="Address" name="address" type="text" />
                        <InputField label="Phone number" name="phonenum" type="text" />
                        <button type="submit" >Register</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};
export default MyComponent;