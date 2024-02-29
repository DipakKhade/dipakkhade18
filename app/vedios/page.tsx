import { FC } from "react";

interface PageProps {}

const VediosSrc: string[] = [
    
    "https://www.youtube.com/embed/HbbJJwEMvQY?si=9G3xKDTwEWJQvj1_",

  ];
const Page: FC<PageProps> = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-[90vw] m-auto p-8">
        <div>

      
        {VediosSrc.map((source, index) => (
          <div key={index} className="h-80 w-full">
            <iframe
              width="560"
              height="315"
              src={source}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}

</div>
      </div>
    </>
  );
};

export default Page;
