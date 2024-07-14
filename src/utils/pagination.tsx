

import ReactPaginate from 'react-paginate';
import PN from 'persian-number';


export default function Pagination({totalPages, onClick, initialPage, cls} : {cls ?: string,totalPages : number, onClick : any, initialPage : any}) {
    return (
        <ReactPaginate 
            pageCount={totalPages}
            nextLabel={'بعدی'}
            previousLabel={'قبلی'}
            className={`${cls} flex items-center justify-center mt-6 gap-x-1`}
            activeLinkClassName="bg-gray-700 text-white"
            breakLinkClassName="p-2 w-10 h-10"
            pageLabelBuilder={(page) => PN.convertEnToPe(page)}
            pageLinkClassName="block p-2 w-9 h-9 text-center rounded-full border-b-2"
            nextLinkClassName="p-2 shadow rounded-lg mr-4"
            previousLinkClassName="p-2 shadow rounded-lg ml-4"
            onPageChange={onClick}
            forcePage={Number(initialPage)-1}
            renderOnZeroPageCount={undefined}
        />
    )
} 