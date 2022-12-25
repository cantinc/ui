import { Context, useContext } from '@innet/jsx';

const formContext = new Context();
function useForm() {
    return useContext(formContext);
}

export { formContext, useForm };
