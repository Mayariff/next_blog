import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Next App",
  description: "storytelling about our company"
};
const About = () => {
  return (
    <p>
      Привет!
      Я middle front-end разработчик, пишу приложения на react (взаимодействие с сервером rest API, бизнес-логика, визуальное оформление и тесты). Стейт менеджер- Redux (вкл. RTK, RTQ Query) , middleware -Thunk/Saga + ReactQuery.
      Верстаю, использую css, препроцессор sass, styled components, библиотеки Material UI / Ant Design.
      Люблю TypeScript, покрываю код тестами (jest).
      Так же есть опыт работы с node js, webpack.
      Стараюсь постоянно совершенствовать свои навыки в front-end разработке и расширять их новыми технологиями.
      Ищу работу на полную ставку в дружной и целеустремленной команде.
    </p>
  );
};

export default About;