import { Heart, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="hidden w-24 min-h-screen p-3 border-r md:p-10 md:w-64 sm:block">
      <div className="sticky left-0 flex flex-col gap-20 top-10">
        <div className="w-full">
          <img
            src="./logo.svg"
            alt="Logo"
            className="hidden cursor-pointer md:block"
          />
          <img src="./mobile-logo.svg" alt="Logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-center gap-8 md:items-start">
          <Link
            to={'/'}
            className="flex gap-1 transition-all hover:text-gray-500"
          >
            <Home size={24} />
            <span className="hidden font-bold md:block">Home</span>
          </Link>
          <Link
            to={'/favorites'}
            className="flex gap-1 transition-all hover:text-gray-500"
          >
            <Heart size={24} />
            <span className="hidden font-bold md:block">Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-10 flex justify-center w-full gap-10 p-2 bg-white border-t sm:hidden">
      <Link to={'/'}>
        <Home size={24} className="cursor-pointer" />
      </Link>
      <Link to={'/favorites'}>
        <Heart size={24} className="cursor-pointer" />
      </Link>
    </div>
  );
};
