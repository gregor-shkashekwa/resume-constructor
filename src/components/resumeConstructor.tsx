import React, {useState} from 'react';
import {PanelHeader, Group, FormItem, Button, FormLayoutGroup, ModalRoot, ModalCard, Div, Text} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import ResumeForm from './forms/resumeForm';
import {generatePDF} from './resumeGenerator';

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

const ResumeConstructor: React.FC = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState<ResumeData>({
    nickname: '',
    name: '',
    patronymic: '',
    phone: '',
    email: '',
    telegram: '',
    github: '',
    firstYear: '',
    lastYear: '',
    purpose: '',
    achievements: '',
    additionalEducation: '',
    post: '',
    speciality: '',
    isBusy: '',
    workingGraphics: '',
    experience: '',
    graduateWork: '',
    profSkills: '',
    softSkills: '',
    about: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field as keyof ResumeData]: value,
    }));
  };

  const handleImageUpload = (imageUrl: string | null) => { setUploadedImageUrl(imageUrl); };

  const [isPublishModalVisible, setIsPublishModalVisible] = useState(false);
  const onPublishClick = () => { setIsPublishModalVisible(true); };
  const onClosePublishModal = () => { setIsPublishModalVisible(false); };

  const [warningModal, setWarningModal] = useState(false);
  const onCloseWarningModal = () => { setWarningModal(false); };

  const [imageWarningModal, setImageWarningModal] = useState(false);
  const onCloseImageWarningModal = () => { setImageWarningModal(false); };

  const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked); // Устанавливаем новое состояние чекбокса
    };

  const handleGeneratePDF = () => {
    const result = generatePDF(formData, uploadedImageUrl);
    if (result === null) {
      setWarningModal(true);
    }
  };

  return (
    <>
      <PanelHeader>Написать резюме</PanelHeader>
      <Group>
        <form onSubmit={(e) => e.preventDefault()}>
          <ResumeForm 
          onImageUpload={handleImageUpload}
          uploadedImageUrl={uploadedImageUrl}
          onInputChange={handleInputChange}
          formData={formData}
          setImageWarningModal={setImageWarningModal}
          isChecked={isChecked} // Передаем состояние чекбокса
          onCheckboxChange={handleCheckboxChange}
          />
          <FormItem>
            <FormLayoutGroup mode="horizontal">
              <FormItem>
              <Button type="submit" size="l" stretched disabled={!isChecked} onClick={handleGeneratePDF}>Напечатать</Button>
              </FormItem>
              <FormItem>
                <Button type="submit" size="l" stretched disabled={!isChecked} onClick={onPublishClick}>
                  Опубликовать
                </Button>
              </FormItem>
            </FormLayoutGroup>
          </FormItem>
          {isPublishModalVisible && (
            <ModalRoot activeModal="publish-modal">
              <ModalCard
                id="publish-modal"
                onClose={onClosePublishModal}
                header="Предупреждение"
                children={
                  <Div style={{ color: 'var(--vkui--color_text_primary)' }}>
                    <Text>Данный функционал находится в стадии разработки.</Text>
                  </Div>
                }
              />
            </ModalRoot>
          )}
          {warningModal && (
            <ModalRoot activeModal="publish-modal">
              <ModalCard
                id="publish-modal"
                onClose={onCloseWarningModal}
                header="Предупреждение"
                children={
                  <Div style={{ color: 'var(--vkui--color_text_primary)' }}>
                    <Text>Пожалуйста, проверь, все ли ты заполнил(а) и добавил(а) ли свое фото</Text>
                  </Div>
                }
              />
            </ModalRoot>
          )}
          {imageWarningModal && (
            <ModalRoot activeModal="publish-modal">
              <ModalCard
                id="publish-modal"
                onClose={onCloseImageWarningModal}
                header="Предупреждение"
                children={
                  <Div style={{ color: 'var(--vkui--color_text_primary)' }}>
                    <Text>Пожалуйста, загружай фото в формате PNG или JPG</Text>
                  </Div>
                }
              />
            </ModalRoot>
          )}
        </form>
      </Group>
    </>
  );
};

export default ResumeConstructor;