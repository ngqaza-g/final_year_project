import post from '../../../../modules/post';
import toast from 'react-hot-toast';
const sendForm = async (url, form, setForm, setLoading, showToast = true)=>{
    if(setLoading) setLoading(true);
    
    let toastId;
    if(showToast) toastId = toast.loading("Loading.....");
    let response = {};
    try{
        const {status, data}  = await post(url, form);
        if(setLoading) setLoading(false);
    
        if(showToast){
            if(status === 200){
                toast.success(data.msg, {
                    id: toastId
                });
            }else{
                if(showToast){
                    toast.error(data.msg, {
                        id: toastId
                    });

                } 
            }
        }
        
    
        if(setForm){
    
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
        }
        response = {status : status, data : data};
    }catch{
        if(setLoading) setLoading(false);
        if(showToast){
            toast.error("An Error Occured Conneting to the Server",{
                id: toastId
            });
        }
        response = {status: 500};
    }

    return response;
}

export default sendForm;