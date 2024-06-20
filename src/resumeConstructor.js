import React, {useState} from 'react';
import {PanelHeader, Group, FormItem, Button, FormLayoutGroup, ModalRoot, ModalCard, Div, Text} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import FileUploader from './imageUploader';
import DataFilling from './contacts';
import YourPortfo from './portfolio';
import PDFGenerator from './resumeGenerator';


const ResumeConstructor = () => {
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [formData, setFormData] = useState({
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

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
    };

    const [isPublishModalVisible, setIsPublishModalVisible] = useState(false);

    const onPublishClick = () => {
    setIsPublishModalVisible(true);
    };

    const onClosePublishModal = () => {
    setIsPublishModalVisible(false);
    };

    return (
        <>
        <PanelHeader>Написать резюме</PanelHeader>
        <Group>
          <form onSubmit={(e) => e.preventDefault()}>
            <FileUploader onImageUpload={setUploadedImageUrl} uploadedImageUrl={uploadedImageUrl} />
            <DataFilling formData={formData} onInputChange={handleInputChange}/>
            <YourPortfo formData={formData} onInputChange={handleInputChange}/>
            <FormItem>
              <FormLayoutGroup mode="horizontal">
                <FormItem>
                    <PDFGenerator formData={formData} uploadedImageUrl={uploadedImageUrl} />
                </FormItem>
                <FormItem>
                  <Button type="submit" size="l" stretched onClick={onPublishClick}>
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
          </form>
        </Group>
        </>
    )

};

export default ResumeConstructor;