import React from "react";

const HeroAbout = () => {
  return (
    <div className="mx-auto mt-10 w-full max-w-[1350px] items-center justify-center px-5">
      <div className="w-full">
        <img src="https://global-mt.ru/local/templates/gmt/img/companyMedical.png" />
      </div>
      <div className="mt-10 flex flex-wrap justify-between  max-xl:flex max-md:flex-col">
        <div className="w-[48%] max-md:w-full items-center justify-start">
          <h1 className="text-[48px] text-primaryBlack ">
            Глобал медикал трейд
          </h1>
        </div>
        <div className="w-[48%] max-md:w-full items-center justify-start">
          <p>
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.Компания
            ООО «Глобал Медикал Трейд» считает своим долгом оказать специалистам
            всю необходимую помощь в деле поставок медицинского оборудования.
            Наш каталог включает передовое оборудование от лучших производителей
            России, Европы, Азии и США.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
