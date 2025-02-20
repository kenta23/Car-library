type FormState = {
    success: boolean;
    fields?: Record<string, string>;
    errors?: Record<string, string[]>;
  };

export async function handleLogin(prevState: FormState, formdata: FormData): Promise<FormState> { 
    console.log('formdata',formdata);

    const username =  formdata.get('username');
    const password = formdata.get('password');

    return {
        success: true
    }
}