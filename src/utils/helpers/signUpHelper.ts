interface SignUpFormDTO {
  name: string;
  email: string;
  password: string;
  room_number: number | null;
}

const createFormDefaultValues = (): SignUpFormDTO => {
  const defaultValues = {
    name: '',
    email: '',
    password: '',
    room_number: null,
  };

  return defaultValues;
};

export default {
  createFormDefaultValues,
};
