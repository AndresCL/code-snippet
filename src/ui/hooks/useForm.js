import { useState } from 'react';

export const useForm = (initialForm = {})  => {

  // Init
  const [formState, setFormState] = useState(initialForm);

  // Methods

  // Save input changes
  const onInputChange = ({ target }) => {
    // Get target input and save it value on the formState
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  // Reset form state
  const onResetForm = () => {
    setFormState(initialForm);
  }

  // Return state and methods
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
