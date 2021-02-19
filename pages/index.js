import NavUpper from '../components/NavUpper';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

export default function Home() {
  return (
    <div className="flex w-full">
      <LeftSidebar />
      <div className="flex-grow">
        <NavUpper />
      </div>
      <div className="flex flex-shrink-0 flex-grow-0">
        <RightSidebar />
      </div>
    </div>
  );
}
