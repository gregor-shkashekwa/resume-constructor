import React from 'react';
import { FormItem, Input} from '@vkontakte/vkui';

interface TelegramFormProps {
  formData: {
    telegram: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const TelegramForm: React.FC<TelegramFormProps> = ({ formData, onInputChange }) => {

  return (
    <>
      <FormItem htmlFor="Телеграм" top="Телеграм" key="telegram">
        <Input 
          id="Телеграм" 
          value={formData.telegram} 
          onChange={(e) => onInputChange('telegram', e.target.value)} 
          name="telegram"
          required
        />
      </FormItem>
    </>
  );
};

export default TelegramForm;