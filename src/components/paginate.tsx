import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import ReactPaginate from 'react-paginate';

interface PageNavigationProps {
  pageCount: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
}

const PageNavigation = (props: PageNavigationProps) => {
  return (
    <ReactPaginate
      previousLabel={
        <div className="-mt-px flex w-0 flex-1 justify-start">
          <button
            type="button"
            className="inline-flex items-center border-y-2 border-transparent pl-1 pt-4 text-sm font-medium text-white hover:border-gray-300 hover:text-gray-200"
          >
            <ArrowLeftIcon
              className="mr-3 h-5 w-5 text-white"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>
      }
      nextLabel={
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <button
            type="button"
            className="inline-flex items-center border-y-2 border-transparent pl-1 pt-4 text-sm font-medium text-white hover:border-gray-300 hover:text-gray-200"
          >
            Next
            <ArrowRightIcon
              className="ml-3 h-5 w-5 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
      }
      breakLabel="..."
      breakClassName="break-me"
      pageCount={props.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={(data) => props.handlePageClick(data)}
      containerClassName="border-b border-gray-200 px-4 py-2 flex items-center justify-between sm:px-0"
      pageClassName="hidden sm:block border-transparent text-gray-100 hover:text-gray-700 hover:border-gray-300 border-t-2 border-b-2 pt-4 px-4  text-sm font-medium"
      activeClassName="border-transparent text-white hover:text-gray-700 hover:border-gray-300 border-t-2 border-b-2 pt-4 px-4 text-sm font-medium bg-gray-900"
    />
  );
};

export default PageNavigation;
