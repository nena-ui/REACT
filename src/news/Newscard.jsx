

function Newscard({news}){

  return (
<>  
<div>     
 <div className="h-60 flex justify-center items-center">
          <img src={news.urlToImage} al
           alt={news.name} 
           className="h-full object-cover tranition-transform duration-300 hover:scale-105 hover:opacity-90" />

        </div>
        <h2 className="text-xl font-bold mt-2">{news.title}</h2>
        <h2 className="text-xl font-bold mt-2">{news.description}</h2>
        <h2 className="text-xl font-bold mt-2">{news.content}</h2>
        </div>
        </>

  );
};
export default Newscard
