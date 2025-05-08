  import useFetch from './Usefetch';
  import { useTranslation } from "react-i18next";

function BlogSection() {
   const { data: Blogdata, loading, error } = useFetch("/db.json");
     const { t,i18n} = useTranslation(); 
   

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (

    <div className="py-16 px-6 md:px-0">

      {Blogdata.blogSection.map((item)=>{
        return(
          <div key={item.id} className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-14">
          <img 
            src={item.image} 
            alt="pana" 
            className="w-full max-w-[450px] h-auto"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-[32px] md:text-[40px] font-semibold text-gray-800">
              {item.title[i18n.language]}
            </h1>
            <p className="font-medium text-gray-500 mt-4">
             {item.description[i18n.language]}
            </p>
            <button className="w-[151px] mt-6 rounded-[4px] h-[52px] bg-green-500 text-white hover:bg-transparent hover:text-green-500 border-2 border-green-500 transition-all duration-300">
            {t('learnbtn.h1')} 

            </button>
          </div>
        </div>

          
        )
      })}
     
    </div>
  );
}

export default BlogSection;
