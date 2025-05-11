  import { useTranslation } from "react-i18next";
  import vector from '../../public/Icons/Right.png';

  function Calltoaction() {
    const { t } = useTranslation();

    return (
      <div className="py-24 px-6 md:px-0">
        <h1 className="text-center text-[34px] sm:text-[54px] md:text-[64px] font-semibold leading-tight">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>

        <button 
          className=" bg-black hover:bg-transparent mt-11 hover:text-green-500 border-2 text-white border-green-500 transition-all duration-300mt-14  mx-auto rounded-[4px] flex justify-center items-center gap-[10px] w-[178px] h-[58px]">
          {t('getdemo.title')}
          <span className="flex items-center">
            <img className="w-[27px] h-[28px]" src={vector} alt="vector" />
          </span>
        </button>
      </div>
    );
  }

  export default Calltoaction;
