const updateForm = (name, value, setForm)=>{

    setForm(prev =>{
        const new_form = {...prev};
        const name_split = name.split('.');

        if(name_split.length < 2){
            new_form[name] = value;
        }else{
            const [object_name, value_name] = name_split;
            if(!new_form[object_name]) new_form[object_name] = {};
            new_form[object_name][value_name] = value;
        }

        return new_form;
    })

}

export default updateForm;