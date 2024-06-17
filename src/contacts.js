import React, { useState } from 'react';
import { FormLayoutGroup, FormItem, Input, CellButton } from '@vkontakte/vkui';

const DataFilling = ({ formData, onInputChange }) => {
  const [showPatronymic, setShowPatronymic] = useState(formData.patronymic !== '');
  const [showGithub, setShowGithub] = useState(formData.github !== '');

  const onShowPatronymic = () => {
    setShowPatronymic(true);
  };

  const onShowGithub = () => {
    setShowGithub(true);
  };

  const onRemovePatronynic = () => {
    setShowPatronymic(false);
    onInputChange('patronymic', '');
  };

  const onRemoveGithub = () => {
    setShowGithub(false);
    onInputChange('github', '');
  };

  return (
    <>
      <FormLayoutGroup mode="horizontal">
        <FormItem htmlFor="nickname" top="Фамилия">
          <Input 
            id="nickname" 
            value={formData.nickname} 
            onChange={(e) => onInputChange('nickname', e.target.value)}
          />
        </FormItem>
        <FormItem htmlFor="name" top="Имя">
          <Input 
            id="name" 
            value={formData.name} 
            onChange={(e) => onInputChange('name', e.target.value)}
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

      <FormItem 
        htmlFor="phone" 
        top="Телефон" 
        key="phone"
      >
        <Input 
          id="Телефон" 
          value={formData.phone} 
          onChange={(e) => onInputChange('phone', e.target.value)} 
          name="phone"
          aria-labelledby="phone-type"
          required
          type="tel"
        />
      </FormItem>

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

      <FormItem htmlFor="Телеграм" top="Телеграм" key="telegram">
        <Input 
          id="Телеграм" 
          value={formData.telegram} 
          onChange={(e) => onInputChange('telegram', e.target.value)} 
          name="telegram" 
        />
      </FormItem>

      {!showGithub ? (
        <CellButton onClick={onShowGithub}>Указать Github</CellButton>
      ) : (
        <FormItem
          htmlFor="github"
          removable
          onRemove={onRemoveGithub}
          top="Github"
          bottom="Есть Github? Лиды с удовольствием посмотрят код твоих проектов"
          bottomId="githubDescription"
        >
          <Input 
            id="github" 
            value={formData.github} 
            onChange={(e) => onInputChange('github', e.target.value)} 
            aria-labelledby="githubDescription" 
          />
        </FormItem>
      )}
    </>
  );
};

export default DataFilling;