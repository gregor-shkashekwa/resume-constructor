import React from 'react';
import {FormItem, Select} from '@vkontakte/vkui';

export interface PurposeFormProps {
  formData: {
    purpose: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const PurposeForm: React.FC<PurposeFormProps> = ({ formData, onInputChange }) => {
  const purposeOptions = [
    { value: 'Информационные системы и программирование', label: 'Информационные системы и программирование' },
    { value: 'Сетевое и системное администрирование', label: 'Сетевое и системное администрирование' },
    { value: 'Компьютерные системы и комплексы', label: 'Компьютерные системы и комплексы' },
    { value: 'Обеспечение информационной безопасности автоматизированных систем', label: 'Обеспечение информационной безопасности автоматизированных систем' },
    { value: 'Монтаж, техническое обслуживание и ремонт электронных приборов и устройств', label: 'Монтаж, техническое обслуживание и ремонт электронных приборов и устройств' },
    { value: 'Мастер по обработке цифровой информации', label: 'Мастер по обработке цифровой информации' },
    { value: 'Технические средства защиты информации', label: 'Технические средства защиты информации' },
    { value: 'Программирование в компьютерных системах', label: 'Программирование в компьютерных системах' },
    { value: 'Твердотельная электроника', label: 'Твердотельная электроника' },
    { value: 'Оператор информационных систем и ресурсов', label: 'Оператор информационных систем и ресурсов' },
  ];

  const handlePurposeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPurposeValue = e.target.value;
    onInputChange('purpose', selectedPurposeValue);
  };

    return (
    <>
        <FormItem
            top="Факультет"
            htmlFor="purpose-of-the-trip-select-id"
        >
            <Select
            id="purpose-of-the-trip-select-id"
            placeholder="Твоя специальность"
            value={formData.purpose || ''}
            onChange={handlePurposeChange}
            name="purpose"
            required
            options={purposeOptions}
            />
        </FormItem>
    </>
    )
}

export default PurposeForm;