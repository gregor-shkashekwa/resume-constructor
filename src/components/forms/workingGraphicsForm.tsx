import React from 'react';
import {FormItem, Select} from '@vkontakte/vkui';

export interface WorkingGraphicsFormProps {
  formData: {
    workingGraphics: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const WorkingGraphicsForm: React.FC<WorkingGraphicsFormProps> = ({ formData, onInputChange }) => {
  const workingGraphicsOptions = [
    { value: 'Стандартный рабочий день', label: 'Стандартный рабочий день' },
    { value: 'Гибкий график', label: 'Гибкий график' },
    { value: 'Скользящий график', label: 'Скользящий график' },
    { value: 'Сжатая рабочая неделя', label: 'Сжатая рабочая неделя' },
    { value: 'Неограниченный рабочий график', label: 'Неограниченный рабочий график' },
  ];

  const handleWorkingGraphicsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onInputChange('workingGraphics', selectedValue);
  };

  const selectedWorkingGraphicsOption = workingGraphicsOptions.find(
    (option) => option.value === formData.workingGraphics
  );

    return (
    <>
        <FormItem top="График работы" htmlFor="working-graphics">
            <Select
                id="working-graphics"
                placeholder="Выбери график работы"
                value={selectedWorkingGraphicsOption?.value || ''}
                onChange={handleWorkingGraphicsChange}
                name="workingGraphics"
                options={workingGraphicsOptions}
                required
            />
        </FormItem>
    </>
    )
}

export default WorkingGraphicsForm;