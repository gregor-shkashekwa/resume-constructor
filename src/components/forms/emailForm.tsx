import React from 'react';
import { FormItem, Input } from '@vkontakte/vkui';

interface EmailFormProps {
  formData: {
    email: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ formData, onInputChange }) => {

  return (
    <>
      <FormItem 
        htmlFor="email" 
        top="E-mail" 
        bottomId="email-type"
      >
        <Input 
          aria-labelledby="email-type" 
          id="email" 
          type="email" 
          name="email" 
          value={formData.email}  
          required 
          onChange={(e) => onInputChange('email', e.target.value)}
        />
      </FormItem>
    </>
  );
};

export default EmailForm;