import Link from 'next/link';
import Nav from './Nav';

export default function LeftSidebar() {
  return (
    <div>
      <>
        <div
          className="h-screen flex bg-gray-100"
          style={{ minHeight: '640px' }}
        >
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-purple-800">
              <div className="flex items-center flex-shrink-0 px-4">
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                /> */}
                {/* Replace the text below, with some version of the image above */}
                <h3 className="text-4xl text-white font-semibold">
                  StudySpace
                </h3>
              </div>
              <div className="mt-12 flex-grow flex flex-col">
                <Nav />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
