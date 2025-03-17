import React from 'react';
import {FormItem, Input} from '@vkontakte/vkui';

interface PhoneFormProps {
  formData: {
    phone: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const PhoneForm: React.FC<PhoneFormProps> = ({ formData, onInputChange }) => {

  return (
    <>
      <FormItem 
        htmlFor="phone" 
        top="Телефон" 
        key="phone">
        <Input 
          id="Телефон" 
          value={formData.phone} 
          onChange={(e) => onInputChange('phone', e.target.value)} 
          name="phone"
          aria-labelledby="phone-type"
          required
          type="number"
        />
      </FormItem>
    </>
  );
};

export default PhoneForm;