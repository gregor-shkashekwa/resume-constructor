import React, { useState } from 'react';
import { FormItem, Input } from '@vkontakte/vkui';

interface EmailFormProps {
  formData: {
    email: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const ERRORS_MAP: Record<string, string> = {
  empty: 'Пожалуйста, введите электронную почту',
  incorrect: 'Электронная почта некорректна',
};

type EmailError = keyof typeof ERRORS_MAP | '';

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

const EmailForm: React.FC<EmailFormProps> = ({ formData, onInputChange }) => {
  const [emailError, setEmailError] = useState<EmailError>('');

  const handleInputChange = (field: string, value: string) => {
    // Разрешаем ввод латинских букв, цифр, @ и . 
    const trimmedValue = value.replace(/[^a-zA-Z0-9@.]/g, ''); 
    onInputChange(field, trimmedValue);

    // Валидация электронной почты
    if (!trimmedValue) {
      setEmailError('empty');
    } else if (!validateEmail(trimmedValue)) {
      setEmailError('incorrect');
    } else {
      setEmailError(''); // Устанавливаем в пустую строку, если корректно
    }
  };

  return (
    <>
      <FormItem 
        htmlFor="email" 
        top="E-mail" 
        status={emailError ? 'error' : (formData.email ? 'valid' : 'default')}
        bottom={emailError ? ERRORS_MAP[emailError] : (formData.email ? 'Электронная почта введена верно!' : '')}
        bottomId="email-type"
        required
      >
        <Input 
          aria-labelledby="email-type" 
          id="email" 
          name="email" 
          value={formData.email}  
          required 
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </FormItem>
    </>
  );
};

export default EmailForm;
