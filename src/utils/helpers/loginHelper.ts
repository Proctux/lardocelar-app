interface LoginFormDTO {
  email: string;
  password: string;
}

const createDefaultValues = (): LoginFormDTO => {
  const defaultValues = {
    email: '',
    password: '',
  };

  return defaultValues;
};

export default { createDefaultValues };
