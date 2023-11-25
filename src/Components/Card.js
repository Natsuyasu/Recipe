import { Dialog } from '@headlessui/react'
import BlurHashedImage from './BlurHashedImage';

function Card(props) {

  const hasMeta = props.ImgMeta !== undefined;

  return (
    <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto">
        {!hasMeta &&
         <img className="w-[full] background-size:cover;background-position:center" src={props.ImgURL} alt='RecipeCover' />
        }

        { hasMeta && 
         <BlurHashedImage
            hash={props.ImgMeta.BlurHash}
            width={props.ImgMeta.Width}
            height={props.ImgMeta.Height}
            src={props.ImgURL}
            alt='RecipeCover'
          />
        }
        <div className="p-4 sm:p-6">
          <Dialog.Title className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
            {props.Name}
          </Dialog.Title>
          <p className="text-[#7C7C80] font-[15px] mt-6 whitespace-pre-line">{props.Text}</p>
          {/* {console.log('地址'+ props.ImgMessage)} */}
          <button
            onClick={props.cancelCard}
            className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-zinc-100 hover:text-[#000000dd] active:bg-zinc-200"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
