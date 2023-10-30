import { getImageUrl } from "../../utils";
import contact from "../../data/contact.json";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white pt-8 pb-4' id='contact'>
      <div className='container mx-auto flex items-center justify-center'>
        <div className='mt-4 flex flex-col items-center justify-center'>
          <h2 className='text-xl font-semibold'>Get In Touch</h2>
          <ul className='flex flex-row items-start list-none gap-2 mt-2'>
            {contact.map((info, id) => {
              return (
                <li className='flex items-center gap-2' key={id}>
                  <a href={info.link} target='_blank' rel='noreferrer'>
                    <img
                      className='w-10'
                      src={getImageUrl(info.imageSrc)}
                      alt={`${info.type} icon`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className='text-sm mt-6 text-center'>&copy; 2023 Audrey Thelin</p>
    </footer>
  );
};

export default Footer;
