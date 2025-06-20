import { FaComment, FaRegBookmark } from 'react-icons/fa';
import {PiHandsClapping} from 'react-icons/pi'

const Reactions = () => {
  return (
    <div className="flex justify-between items-center w-full text-sm ">
      <div className=' flex gap-4 items-center '>
        <span className=' mr04 flex items-center gap-1 cursor-pointer '>
          <PiHandsClapping size={20} />
          { 7}
        </span>
        <span className=' mr04 flex items-center gap-1 cursor-pointer '>
          <FaComment size={18} />
          {3}
        </span>

      </div>
      <div>
        <FaRegBookmark size={18}/>
      </div>
    </div>
  );
};

export default Reactions;