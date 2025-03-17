import React, { useState } from 'react';
import { FormLayoutGroup, FormItem, Input, CellButton } from '@vkontakte/vkui';

interface FioFormProps {
  formData: {
    nickname: string;
    name: string;
    patronymic: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const FioForm: React.FC<FioFormProps> = ({ formData, onInputChange }) => {
  const [showPatronymic, setShowPatronymic] = useState(formData.patronymic !== '');

  const onShowPatronymic = () => { setShowPatronymic(true); };

  const onRemovePatronynic = () => {
    setShowPatronymic(false);
    onInputChange('patronymic', '');
  };

  return (
    <>
      <FormLayoutGroup mode="horizontal">
        <FormItem htmlFor="nickname" top="Фамилия">
          <Input 
            id="nickname" 
            value={formData.nickname} 
            onChange={(e) => onInputChange('nickname', e.target.value)}
            required
          />
        </FormItem>
        <FormItem htmlFor="name" top="Имя">
          <Input 
            id="name" 
            value={formData.name} 
            onChange={(e) => onInputChange('name', e.target.value)}
            required
          />
        </FormItem>
      </FormLayoutGroup>

      {!showPatronymic ? (
        <CellButton onClick={onShowPatronymic}>Указать отчество</CellButton>
      ) : (
        <FormItem
          htmlFor="patronymic"
          removable
          onRemove={onRemovePatronynic}
          top="Отчество"
          bottom="Если у тебя нет отчества — удали этот пункт."
          bottomId="patronymicDescription"
        >
          <Input 
            id="patronymic" 
            value={formData.patronymic} 
            onChange={(e) => onInputChange('patronymic', e.target.value)} aria-labelledby="patronymicDescription" 
          />
        </FormItem>
      )}
    </>
  );
};

export default FioForm;