import React from 'react';
import { FormItem, Div } from "@vkontakte/vkui";
import FileUploader from './imageUploader'; // Импортируйте ваш компонент загрузки изображений
import FioForm from './fioForm';
import PhoneForm from './phoneForm';
import EmailForm from './emailForm';
import TelegramForm from './telegramForm';
import GitHubForm from './githubForm';
import CollegeYearsForm from './collegeYearsForm';
import PurposeForm from './purposeForm';
import AchievementsForm from './achievementsForm';
import AdditionalEducationForm from './additionalEducationForm';
import PostSpecialityForm from './postSpecialityForm';
import IsBusyForm from './isBusyForm';
import WorkingGraphicsForm from './workingGraphicsForm';
import ExperienceForm from './experienceForm';
import SkillsForm from './skillsForm';

interface ResumeData {
  nickname: string;
  name: string;
  patronymic: string;
  phone: string;
  email: string;
  telegram: string;
  github: string;
  firstYear: string;
  lastYear: string;
  purpose: string;
  achievements: string;
  additionalEducation: string;
  post: string;
  speciality: string;
  isBusy: string;
  workingGraphics: string;
  experience: string;
  graduateWork: string;
  profSkills: string;
  softSkills: string;
  about: string;
}

interface ResumeFormProps {
  formData: ResumeData;
  onInputChange: (field: string, value: string) => void;
  onImageUpload: (imageUrl: string | null) => void; // Обработчик загрузки изображения
  uploadedImageUrl: string | null; // Состояние загруженного изображения
}

const ResumeForm: React.FC<ResumeFormProps> = ({ formData, onInputChange, onImageUpload, uploadedImageUrl }) => {
  return (
    <>
      <FormItem>
        <Div>
          <FileUploader onImageUpload={onImageUpload} uploadedImageUrl={uploadedImageUrl} />
        </Div>
      </FormItem>
      <FioForm formData={formData} onInputChange={onInputChange} />
      <PhoneForm formData={formData} onInputChange={onInputChange} />
      <EmailForm formData={formData} onInputChange={onInputChange} />
      <TelegramForm formData={formData} onInputChange={onInputChange} />
      <GitHubForm formData={formData} onInputChange={onInputChange} />
      <CollegeYearsForm formData={formData} onInputChange={onInputChange} />
      <PurposeForm formData={formData} onInputChange={onInputChange} />
      <AchievementsForm formData={formData} onInputChange={onInputChange} />
      <AdditionalEducationForm formData={formData} onInputChange={onInputChange} />
      <PostSpecialityForm formData={formData} onInputChange={onInputChange} />
      <IsBusyForm formData={formData} onInputChange={onInputChange} />
      <WorkingGraphicsForm formData={formData} onInputChange={onInputChange} />
      <ExperienceForm formData={formData} onInputChange={onInputChange} />
      <SkillsForm formData={formData} onInputChange={onInputChange} />
    </>
  );
};

export default ResumeForm;
