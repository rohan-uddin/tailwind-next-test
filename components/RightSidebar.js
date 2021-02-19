/* eslint-disable react/button-has-type */
export default function RightSidebar() {
  const name = 'Megan';
  return (
    <div className="h-screen flex flex-col min-w-8 w-24 px-2 bg-gray-700">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto items-center content-center">
        {/* Profile Picture */}
        <div className="relative flex-shrink-0">
          <button className="flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </button>
        </div>
        <h2 className="text-white m-4 overflow-clip text-sm">{name}</h2>
      </div>
    </div>
  );
}
