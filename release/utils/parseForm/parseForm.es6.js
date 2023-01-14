function parseForm(form, method = 'POST') {
    const data = {};
    const arrayData = {};
    for (const field of form.fields) {
        const { name, state: { value } } = field;
        if (method === 'PATCH') {
            if (field.defaultValue === value) {
                continue;
            }
        }
        if (name in data) {
            if (name in arrayData) {
                data[name].push(value);
            }
            else {
                arrayData[name] = true;
                data[name] = [data[name], value];
            }
        }
        else {
            data[name] = value;
        }
    }
    return data;
}

export { parseForm };
