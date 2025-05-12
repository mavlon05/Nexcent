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
          className="  mt-12 bg-green-500 text-white hover:bg-transparent hover:text-green-500 border-2 border-green-500 transition-all duration-300  mx-auto rounded-[4px] flex justify-center items-center gap-[10px] w-[178px] h-[58px]">
          {t('getdemo.title')}
          <span className="flex items-center">
            <img className="w-[27px] h-[28px]" src={vector} alt="vector" />
          </span>
        </button>
      </div>
    );
  }

  export default Calltoaction;
