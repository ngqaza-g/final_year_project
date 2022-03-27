import post from '../../../../modules/post';
import toast from 'react-hot-toast';
const sendForm = async (url, form, setForm, setLoading)=>{
    setLoading(true);
    
    const toastId = toast.loading("Loading.....");
    const {status, data}  = await post(url, form);
    setLoading(false);

    if(status === 200){
        toast.success(data.msg, {
            id: toastId
        });
    }else{
        toast.error(data.msg, {
            id: toastId
        });
    }
    


    setForm(prev=>{
        const form = {...prev};

        for(const key in form){

          if(typeof(form[key]) === "object"){

            for(const key_ in form[key]){

              form[key][key_] = "";

            }

          }else{

            form[key] = "";
          }
        }
        return form;
    });

    return status;
}

export default sendForm;