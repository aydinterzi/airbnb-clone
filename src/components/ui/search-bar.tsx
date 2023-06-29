import {BsSearch} from "react-icons/bs"

function SearchBar() {
  return (
    <div className="px-4 py-1 flex rounded-full border-2 font-medium items-center cursor-pointer shadow-sm transition duration-200 hover:shadow-md">
      <div className="p-4">Anywhere</div>
      <hr className="w-8 rotate-90" />
      <div className="p-4">Any week</div>
      <hr className="w-8 rotate-90" />

      <div className="flex gap-6 items-center p-4 font-light">Add guests</div>
      <div className="w-12 h-12 bg-[#FF385C] rounded-full flex items-center justify-center">
        {<BsSearch className="text-white" />}
      </div>
    </div>
  );
}

export default SearchBar;
