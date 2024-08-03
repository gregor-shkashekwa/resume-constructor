import React, {useState} from 'react';
import { Button, ModalRoot, ModalCard, Div, Text } from '@vkontakte/vkui';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface FormData {
  nickname: string;
  name: string;
  patronymic: string;
  phone: string;
  email: string;
  telegram?: string;
  github?: string;
  firstYear: string;
  lastYear: string;
  purpose: string;
  achievements?: string;
  additionalEducation?: string;
  speciality: string;
  post: string;
  isBusy: string;
  workingGraphics: string;
  experience: string;
  graduateWork?: string;
  profSkills: string;
  softSkills: string;
  about?: string;
}

export interface PDFGeneratorProps {
  formData: FormData;
  uploadedImageUrl?: string | null;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ formData, uploadedImageUrl }) => {
  const [warningModal, setWarningModal] = useState(false);
  const onCloseWarningModal = () => { setWarningModal(false);};
  const generatePDF = () => {
    const docDefinition = {
      content: [
        { image: uploadedImageUrl, width: 200 },
        { text: `${formData.nickname} ${formData.name} ${formData.patronymic}`, style: 'myname' },
        { text: `Телефон: ${formData.phone}`, style: 'header' },
        { text: `E-mail: ${formData.email}`, style: 'header' },
        formData.telegram ? { text: `Telegram: ${formData.telegram}`, style: 'header' } : null,
        formData.github ? { text: `Github: ${formData.github}`, style: 'header' } : null,
        { text: 'Образование: Среднее профессиональное', style: 'header' },
        { text: `ГБПОУ НСО "Новосибирский колледж электроники и вычислительной техники" (${formData.firstYear}-${formData.lastYear})`, style: 'header' },
        { text: `Факультет: ${formData.purpose}`, style: 'header' },
        formData.achievements ? { text: `Достижения, награды: ${formData.achievements}`, style: 'header' } : null,
        formData.additionalEducation ? { text: `Дополнительное образование: ${formData.additionalEducation}`, style: 'header' } : null,
        { text: `Специализация: ${formData.speciality}`, style: 'header' },
        { text: `Желаемая должность: ${formData.post}`, style: 'header' },
        { text: `Занятость: ${formData.isBusy}`, style: 'header' },
        { text: `График работы: ${formData.workingGraphics}`, style: 'header' },
        { text: `Опыт работы: ${formData.experience}`, style: 'header' },
        formData.graduateWork ? { text: `Дипломный проект: ${formData.graduateWork}`, style: 'header' } : null,
        { text: `Профессиональные навыки: ${formData.profSkills}`, style: 'header' },
        { text: `Мягкие навыки: ${formData.softSkills}`, style: 'header' },
        formData.about ? { text: `О себе: ${formData.about}`, style: 'header' } : null,
      ],
      styles: {
        header: {
          fontSize: 12,
          margin: [0, 10, 0, 0],
        },
        myname: {
          fontSize: 14,
          margin: [0, 10, 0, 0],
        },
      },
    };

    if (uploadedImageUrl === null ||
      formData.nickname === '' ||
      formData.name === '' ||
      formData.phone === '' ||
      formData.email === '' ||
      formData.firstYear === '' ||
      formData.lastYear === '' ||
      formData.purpose === '' ||
      formData.speciality === '' ||
      formData.post === '' ||
      formData.isBusy === '' ||
      formData.workingGraphics === '' ||
      formData.experience === '' ||
      formData.profSkills === '' ||
      formData.softSkills === ''
    ) {
      setWarningModal(true);
    } else {
      pdfMake.createPdf(docDefinition).download('resume.pdf');
    }
  };

  return (
    <>
      <Button type="submit" size="l" stretched onClick={generatePDF}>
        Напечатать
      </Button>
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
    </>
  );
};

export default PDFGenerator;