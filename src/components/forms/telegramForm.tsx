import React from 'react';
import { FormItem, Input } from '@vkontakte/vkui';

interface TelegramFormProps {
  formData: {
    telegram: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const TelegramForm: React.FC<TelegramFormProps> = ({ formData, onInputChange }) => {

  const handleInputChange = (field: string, value: string) => {
    // Фильтруем ввод, оставляя только латинские символы
    const filteredValue = value.replace(/[^a-zA-Z]/g, ''); // Удаляем все, кроме латинских букв
    onInputChange(field, filteredValue);
  };

  return (
    <>
      <FormItem htmlFor="telegram" top="Телеграм" key="telegram">
        <Input 
          id="telegram" 
          value={formData.telegram} 
          onChange={(e) => handleInputChange('telegram', e.target.value)} 
          name="telegram"
          required
        />
      </FormItem>
    </>
  );
};

export default TelegramForm;
