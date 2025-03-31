import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import vkBridge from '@vkontakte/vk-bridge';

pdfMake.vfs = pdfFonts.vfs;

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

export const generatePDF = (formData: FormData, uploadedImageUrl: string | null) =>{
  const docDefinition = {
    content: [
      {
        columns: [
          { image: uploadedImageUrl, width: 100 },
          {
            stack: [
              { text: `${formData.nickname} ${formData.name} ${formData.patronymic}`, style: 'myname' },
              { text: `Телефон: ${formData.phone}`, style: 'header' },
              { text: `E-mail: ${formData.email}`, style: 'header' },
              formData.telegram ? { text: `Telegram: ${formData.telegram}`, style: 'header' } : null,
              formData.github ? { text: `Git: ${formData.github}`, style: 'header' } : null,
            ]
          }
        ]
      },
      {
        stack: [
          { text: 'Образование: Среднее профессиональное', style: 'aboutme' },
          { text: `ГБПОУ НСО "Новосибирский колледж электроники и вычислительной техники"`, style: 'aboutme' },
          { text: `Дата поступления: ${formData.firstYear}`, style: 'aboutme'},
          { text: `Дата выпуска: ${formData.lastYear}`, style: 'aboutme'},
          { text: `Факультет: ${formData.purpose}`, style: 'aboutme' },
          formData.achievements ? { text: `Достижения, награды: ${formData.achievements}`, style: 'aboutme' } : null,
          formData.additionalEducation ? { text: `Дополнительное образование: ${formData.additionalEducation}`, style: 'aboutme' } : null,
          { text: `Специализация: ${formData.speciality}`, style: 'aboutme' },
          { text: `Желаемая должность: ${formData.post}`, style: 'aboutme' },
          { text: `Занятость: ${formData.isBusy}`, style: 'aboutme' },
          { text: `График работы: ${formData.workingGraphics}`, style: 'aboutme' },
          { text: `Опыт работы: ${formData.experience}`, style: 'aboutme' },
          formData.graduateWork ? { text: `Дипломный проект: ${formData.graduateWork}`, style: 'aboutme' } : null,
          { text: `Профессиональные навыки: ${formData.profSkills}`, style: 'aboutme' },
          { text: `Мягкие навыки: ${formData.softSkills}`, style: 'aboutme' },
          formData.about ? { text: `О себе: ${formData.about}`, style: 'aboutme' } : null,
        ]
      }
    ],
    styles: {
      header: {
        fontSize: 12,
        margin: [50, 10, 0, 0],
      },
      myname: {
        fontSize: 14,
        margin: [50, 10, 0, 0],
      },
      aboutme: {
        fontSize: 12,
        margin: [0, 14, 0, 0],
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
    return null;
  } else {
    pdfMake.createPdf(docDefinition).getBase64((base64: string) => {
      // Добавляем префикс, так как VKWebAppDownloadFile требует data URL
      const dataUrl = `data:application/pdf;base64,${base64}`;

      // Используем bridge для скачивания через VKWebAppDownloadFile
      vkBridge.send("VKWebAppDownloadFile", {
          url: dataUrl,
          filename: "resume.pdf"
      }).catch(() => {
          // Фоллбек на ручное скачивание
          const link = document.createElement('a');
          link.href = dataUrl;
          link.target = '_blank';
          link.download = 'resume.pdf';
          link.click();
      });
  });
  }
}