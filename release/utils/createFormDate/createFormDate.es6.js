function createFormDate(form, method = 'POST') {
    const body = new FormData();
    for (const field of form.fields) {
        if (method === 'PATCH') {
            if (field.defaultValue === field.state.value) {
                continue;
            }
        }
        body.append(field.name, field.state.value);
    }
    return body;
}

export { createFormDate };
