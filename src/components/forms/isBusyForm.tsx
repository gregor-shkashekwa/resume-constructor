import React from 'react';
import {FormItem, Select} from '@vkontakte/vkui';

export interface IsBusyFormProps {
  formData: {
    isBusy: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const IsBusyForm: React.FC<IsBusyFormProps> = ({ formData, onInputChange }) => {
  const isBusyOptions = [
    { value: 'Полная', label: 'Полная' },
    { value: 'Неполная', label: 'Неполная' },
    { value: 'Контрактная работа', label: 'Контрактная работа' },
    { value: 'Удаленная работа', label: 'Удаленная работа' },
    { value: 'Фриланс', label: 'Фриланс' },
  ];

  const handleIsBusyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onInputChange('isBusy', selectedValue);
  };

    return (
    <>
        <FormItem top="Занятость" htmlFor="is-busy">
            <Select
                id="is-busy"
                placeholder="Выбери тип занятости"
                value={formData.isBusy || ''}
                onChange={handleIsBusyChange}
                name="isBusy"
                options={isBusyOptions}
                required
            />
        </FormItem>
    </>
    )
}

export default IsBusyForm;