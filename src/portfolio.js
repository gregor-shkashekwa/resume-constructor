import React, {useState} from 'react';
import {FormItem, Input, Select, Textarea, CellButton} from '@vkontakte/vkui';

const YourPortfo = ({ formData, onInputChange }) => {

    const [showGrauateWork, setShowGraduateWork] = useState(true);
    const onShowGraduateWork = () => setShowGraduateWork(true);
    const onRemoveGraduateWork = () => setShowGraduateWork(false);

    const purposeOptions = [
        { value: 'Информационные системы и программирование', label: 'Информационные системы и программирование' },
        { value: 'Сетевое и системное администрирование', label: 'Сетевое и системное администрирование' },
        { value: 'Компьютерные системы и комплексы', label: 'Компьютерные системы и комплексы' },
        { value: 'Обеспечение информационной безопасности автоматизированных систем', label: 'Обеспечение информационной безопасности автоматизированных систем' },
        { value: 'Монтаж, техническое обслуживание и ремонт электронных приборов и устройств', label: 'Монтаж, техническое обслуживание и ремонт электронных приборов и устройств' },
        { value: 'Мастер по обработке цифровой информации', label: 'Мастер по обработке цифровой информации' },
        { value: 'Технические средства защиты информации', label: 'Технические средства защиты информации' },
        { value: 'Программирование в компьютерных системах', label: 'Программирование в компьютерных системах' }
    ];
    
    const handlePurposeChange = (e) => {
        const selectedPurposeValue = e.target.value;
        onInputChange('purpose', selectedPurposeValue);
    };

    const isBusyOptions = [
        { value: 'Полная', label: 'Полная' },
        { value: 'Неполная', label: 'Неполная' },
        { value: 'Контрактная работа', label: 'Контрактная работа' },
        { value: 'Удаленная работа', label: 'Удаленная работа' },
        { value: 'Фриланс', label: 'Фриланс' },
    ];
    
    const handleisBusyChange = (e) => {
        const selectedValue = e.target.value;
        onInputChange('isBusy', selectedValue);
    };

    const workingGraphicsOptions = [
        { value: 'Стандартный рабочий день', label: 'Стандартный рабочий день' },
        { value: 'Гибкий график', label: 'Гибкий график' },
        { value: 'Скользящий график', label: 'Скользящий график' },
        { value: 'Сжатая рабочая неделя', label: 'Сжатая рабочая неделя' },
        { value: 'Неограниченный рабочий график', label: 'Неограниченный рабочий график' },
      ];
    
      const handleworkingGraphicsChange = (e) => {
        const selectedValue = e.target.value;
        onInputChange('workingGraphics', selectedValue);
      };
    
      const selectedWorkingGraphicsOption = workingGraphicsOptions.find(
        (option) => option.value === formData.workingGraphics
      );

    return (
    <>

    <FormItem htmlFor="firstYear" top="Год поступления в колледж">
      <Input id="firstYear" value={formData.firstYear} onChange={(e) => onInputChange('firstYear', e.target.value)} name="firstYear"/>
    </FormItem>

    <FormItem htmlFor="lastYear" top="Год выпуска из колледжа">
      <Input id="lastYear" value={formData.lastYear} onChange={(e) => onInputChange('lastYear', e.target.value)} name="lastYear"/>
    </FormItem>
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

    <FormItem htmlFor="post" top="Желаемая должность">
        <Input id="post" value={formData.post} onChange={(e) => onInputChange('post', e.target.value)} name="post"/>
    </FormItem>

    <FormItem htmlFor="speciality" top="Специализация">
        <Input id="speciality" value={formData.speciality} onChange={(e) => onInputChange('speciality', e.target.value)} name="speciality"/>
    </FormItem>

    <FormItem top="Занятость" htmlFor="is-busy">
        <Select
            id="is-busy"
            value={formData.isBusy || ''}
            onChange={handleisBusyChange}
            name="isBusy"
            options={isBusyOptions}
        />
    </FormItem>

    <FormItem top="График работы" htmlFor="working-graphics">
    <Select
        id="working-graphics"
        value={selectedWorkingGraphicsOption?.value || ''}
        onChange={handleworkingGraphicsChange}
        name="workingGraphics"
        options={workingGraphicsOptions}
      />
    </FormItem>

    <FormItem htmlFor="experience" top="Опыт работы">
        <Input id="experience" value={formData.experience} onChange={(e) => onInputChange('experience', e.target.value)} name="experience"/>
    </FormItem>

    {!showGrauateWork ? (
        <CellButton onClick={onShowGraduateWork}> Указать дипломный проект</CellButton>
      ) : (
        <FormItem
          htmlFor="graduate-work"
          removable
          onRemove={onRemoveGraduateWork}
          top="Дипломный проект"
          bottom="Да, дипломный проект тоже является опытом работы"
        >
          <Input 
            id="graduate-work"
            value={formData.graduateWork} 
            onChange={(e) => onInputChange('graduateWork', e.target.value)}
            name="graduateWork"
          />
        </FormItem>
      )}

    <FormItem htmlFor="skills" top="Навыки">
        <Textarea id="skills" value={formData.skills} onChange={(e) => onInputChange('skills', e.target.value)} name="skills"/>
    </FormItem>

    <FormItem htmlFor="about" top="О себе">
        <Textarea id="about" value={formData.about} onChange={(e) => onInputChange('about', e.target.value)} name="about"/>
    </FormItem>

    </>
    )
}

export default YourPortfo;